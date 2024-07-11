import { Controller, Get, Query, Logger, Post, Body } from '@nestjs/common';
import { Result, returnError, returnSucceed } from '@bytetrade/core';
import { getWebsiteRSSHub, getPageRSSHub } from './radar/radar';
import { defaultRules } from './radar/radar-rules';
import { RSSService } from './rss.service';
import { RuleQuery } from './entity/radar';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Controller('/rss')
export class RSSController {
  private readonly logger = new Logger(RSSController.name);

  constructor(private readonly rssService: RSSService) {}

  @Get('/')
  async get_rss(@Query('path') path: string): Promise<string> {
    return await this.rssService.get_rss(path);
  }

  @Get('/rsshub/website')
  async checkRssHubWebSite(@Query('url') url: string): Promise<Result<any>> {
    this.logger.debug('rsshub');
    const rsshubResult = getWebsiteRSSHub({
      url,
      rules: defaultRules,
    });
    this.logger.debug('rss Hub web site len:', rsshubResult.length);
    return returnSucceed(rsshubResult);
  }

  @Get('/rsshub/page')
  async checkRssHubInPage(@Query('url') url: string): Promise<Result<any>> {
    /*const response = await fetch(url);
    if (!response.ok) {
      this.logger.debug('check rss in web page response is not ok!!', url);
      return returnError(404, 'Not found');
    }*/
    let html: string;
    try {
      const headers = {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        Connection: 'close',
      };
      const response = await axios.get(url, { headers: headers });
      html = response.data;
    } catch (error) {
      this.logger.debug(
        'check rss in web page response is not ok!!',
        url,
        error,
      );
      return returnError(404, 'Not found');
    }

    //const html = await response.text();
    const rsshubResult = getPageRSSHub({
      url,
      html,
      rules: defaultRules,
    });
    this.logger.debug('rssHub  in page  len:', rsshubResult.length);

    const $ = cheerio.load(html);
    const rssLinks = $(
      'link[type="application/rss+xml"], link[type="application/atom+xml"],a[href*="feed"],a[href*="rss"]',
    );
    let rssUrls = rssLinks.map((_, link) => $(link).attr('href')).get();
    rssUrls = Array.from(new Set(rssUrls));
    this.logger.debug('rss urls  in page  len:', rssUrls.length);
    return returnSucceed({
      rsshub: rsshubResult,
      rssuls: rssUrls,
    });
  }
}
