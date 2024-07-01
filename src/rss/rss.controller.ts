import { Controller, Get, Query, Logger, Post, Body } from '@nestjs/common';
import { Result, returnSucceed } from '@bytetrade/core';
import { getWebsiteRSSHub, getPageRSSHub } from './radar/radar';
import { defaultRules } from './radar/radar-rules';
import { RSSService } from './rss.service';
import { RuleQuery } from './entity/radar';

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
    console.log(returnSucceed(rsshubResult));
    return returnSucceed(rsshubResult);
  }

  @Post('/rsshub/page')
  async checkRssHubInPage(@Body() query: RuleQuery): Promise<Result<any>> {
    const url = query.url;
    const html = query.html;
    const rsshubResult = getPageRSSHub({
      url,
      html,
      rules: defaultRules,
    });
    this.logger.debug('rssHub  in page  len:', rsshubResult.length);
    console.log(returnSucceed(rsshubResult));
    return returnSucceed(rsshubResult);
  }
}
