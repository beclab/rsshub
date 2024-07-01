import { parse } from 'psl';
//import  RouteRecognizer from 'route-recognizer';
import { default as RouteRecognizer } from 'route-recognizer';
// import { DOMParser } from 'linkedom';

function ruleHandler(
  rule: any,
  params: any,
  url: string,
  html: string,
  success: any,
  fail: any,
) {
  const run = () => {
    let resultWithParams;
    if (typeof rule.target === 'function') {
      const parser = new DOMParser();
      const document = parser.parseFromString(html, 'text/html');
      try {
        resultWithParams = rule.target(params, url, document);
      } catch (error) {
        console.warn(error);
        resultWithParams = '';
      }
    } else if (typeof rule.target === 'string') {
      resultWithParams = rule.target;
    }

    if (resultWithParams) {
      // if no :param in resultWithParams, requiredParams will be null
      // in that case, just skip the following steps and return resultWithParams
      const requiredParams = resultWithParams
        .match(/\/:\w+\??(?=\/|$)/g)
        ?.map((param) => ({
          name: param.slice(2).replace(/\?$/, ''),
          optional: param.endsWith('?'),
        }));
      if (!requiredParams) {
        return resultWithParams;
      }
      for (const param of requiredParams) {
        if (params[param.name]) {
          // successfully matched
          const regex = new RegExp(`/:${param.name}\\??(?=/|$)`);
          resultWithParams = resultWithParams.replace(
            regex,
            `/${params[param.name]}`,
          );
        } else if (param.optional) {
          // missing optional parameter, drop all following parameters, otherwise the route will be invalid
          const regex = new RegExp(`/:${param.name}\\?(/.*)?$`);
          resultWithParams = resultWithParams.replace(regex, '');
          break;
        } else {
          // missing necessary parameter, fail
          resultWithParams = '';
          break;
        }
      }
      // bypassing double-check since `:` maybe a part of parameter value
      // if (resultWithParams && resultWithParams.includes(':')) {
      //     // double-check
      //     resultWithParams = '';
      // }
    }
    return resultWithParams;
  };
  const resultWithParams = run();
  if (resultWithParams && (!rule.verification || rule.verification(params))) {
    success(resultWithParams);
  } else {
    fail();
  }
}

function formatBlank(str1, str2) {
  if (str1 && str2) {
    return (
      str1 +
      (str1[str1.length - 1].match(/[a-zA-Z0-9]/) ||
      str2[0].match(/[a-zA-Z0-9]/)
        ? ' '
        : '') +
      str2
    );
  } else {
    return (str1 || '') + (str2 || '');
  }
}

function parseRules(rules) {
  return typeof rules === 'string'
    ? window['lave'.split('').reverse().join('')](rules)
    : rules;
}

export function getPageRSSHub(data: { url: string; html: string; rules: any }) {
  const { url, html } = data;
  const rules = parseRules(data.rules);

  let parsedDomain;
  try {
    parsedDomain = parse(new URL(url).hostname);
  } catch (error) {
    return [];
  }
  if (parsedDomain && parsedDomain.domain) {
    const subdomain = parsedDomain.subdomain;
    const domain = parsedDomain.domain;
    if (rules[domain]) {
      let rule = rules[domain][subdomain || '.'];
      if (!rule) {
        if (subdomain === 'www') {
          rule = rules[domain]['.'];
        } else if (!subdomain) {
          rule = rules[domain].www;
        }
      }
      if (rule) {
        const recognized = [];
        rule.forEach((ru, index) => {
          const oriSources =
            Object.prototype.toString.call(ru.source) === '[object Array]'
              ? ru.source
              : typeof ru.source === 'string'
                ? [ru.source]
                : [];
          let sources = [];
          // route-recognizer do not support optional segments or partial matching
          // thus, we need to manually handle it
          // allowing partial matching is necessary, since many rule authors did not mark optional segments
          oriSources.forEach((source) => {
            // trimming `?` is necessary, since route-recognizer considers it as a part of segment
            source = source.replace(/(\/:\w+)\?(?=\/|$)/g, '$1');
            sources.push(source);
            let tailMatch;
            do {
              tailMatch = source.match(/\/:\w+$/);
              if (tailMatch) {
                const tail = tailMatch[0];
                source = source.slice(0, source.length - tail.length);
                sources.push(source);
              }
            } while (tailMatch);
          });
          // deduplicate (some rule authors may already have done similar job)
          sources = sources.filter(
            (item, index) => sources.indexOf(item) === index,
          );
          // match!
          sources.forEach((source) => {
            const router = new RouteRecognizer();
            router.add([
              {
                path: source,
                handler: index,
              },
            ]);
            const result = router.recognize(
              new URL(url).pathname.replace(/\/$/, ''),
            );
            if (result && result[0]) {
              recognized.push(result[0]);
            }
          });
        });
        const result = [];
        Promise.all(
          recognized.map(
            (recog) =>
              new Promise((resolve) => {
                ruleHandler(
                  rule[recog.handler],
                  recog.params,
                  url,
                  html,
                  (parsed: string) => {
                    if (parsed) {
                      result.push({
                        title: formatBlank(
                          rules[domain]._name ? 'Current' : '',
                          rule[recog.handler].title,
                        ),
                        //url: rsshubDomain + parsed,
                        url: 'rsshub:/' + parsed,
                        path: parsed,
                      });
                    } else {
                      /*result.push({
                        title: formatBlank(
                          rules[domain]._name ? 'Current' : '',
                          rule[recog.handler].title,
                        ),
                        url: rule[recog.handler].docs,
                        isDocs: true,
                      });*/
                    }
                    resolve('');
                  },
                  () => {
                    resolve('');
                  },
                );
              }),
          ),
        );
        return result;
      } else {
        return [];
      }
    } else {
      return [];
    }
  } else {
    return [];
  }
}

export function getWebsiteRSSHub(data: { rules: any; url: string }) {
  const { url } = data;
  const rules = parseRules(data.rules);
  let parsedDomain;
  let ruleDomain = url;
  try {
    const hostname = new URL(url).hostname;
    parsedDomain = parse(hostname);
    if (parsedDomain && parsedDomain.domain) {
      const domain = parsedDomain.domain;
      ruleDomain = domain;
    }
  } catch (error) {
    console.log('parse domain error:' + error);
  }

  if (!rules[ruleDomain]) {
    for (const domain in rules) {
      if (rules[domain]['_name'].toLowerCase() == url.toLowerCase()) {
        ruleDomain = domain;
      }
    }
  }
  console.log('get web site rss use domain:' + ruleDomain);
  if (rules[ruleDomain]) {
    const domainRules = [];
    for (const subdomainRules in rules[ruleDomain]) {
      if (subdomainRules[0] !== '_') {
        for (const ruleIndex in rules[ruleDomain][subdomainRules]) {
          const rule = rules[ruleDomain][subdomainRules][ruleIndex];
          if (
            rule['target'] &&
            typeof rule['target'] === 'string' &&
            !rule['target'].includes(':')
          ) {
            domainRules.push(rule);
          }
        }
        //domainRules.push(...rules[ruleDomain][subdomainRules]);
      }
    }
    return domainRules.map((rule) => ({
      title: formatBlank(rules[ruleDomain]._name, rule.title),
      url: 'rsshub:/' + rule.target,
      //isDocs: true,
    }));
  } else {
    return [];
  }
}

export function getList(data) {
  const rules = parseRules(data.rules);
  for (const rule in rules) {
    for (const subrule in rules[rule]) {
      if (subrule[0] !== '_') {
        rules[rule][subrule].forEach((item) => {
          delete item.source;
          delete item.target;
          delete item.script;
          delete item.verification;
        });
      }
    }
  }
  return rules;
}
