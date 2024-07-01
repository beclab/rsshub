import { Controller, Get, Query, Logger } from '@nestjs/common';
import { getWebsiteRSSHub, getPageRSSHub } from './radar/radar';
import { defaultRules } from './radar/radar-rules';
import { RSSService } from './rss.service';

@Controller('/rss')
export class RSSController {
  private readonly logger = new Logger(RSSController.name);

  constructor(private readonly rssService: RSSService) {}

  @Get('/')
  async get_rss(@Query('path') path: string): Promise<string> {
    return await this.rssService.get_rss(path);
  }

  @Get('/rsshub/website')
  async checkRssHubWebSite(@Query('url') url: string): Promise<any> {
    this.logger.debug('rsshub');
    const rsshubResult = getWebsiteRSSHub({
      url,
      rules: defaultRules,
    });
    this.logger.debug('rss Hub web site len:', rsshubResult.length);
    return rsshubResult;
  }

  @Get('/rsshub/page')
  async checkRssHubInPage(
    @Query('url') url: string,
    @Query('html') html: string,
  ): Promise<any> {
    const rsshubResult = getPageRSSHub({
      url,
      html,
      rules: defaultRules,
    });
    this.logger.debug('rssHub  in page  len:', rsshubResult.length);
    return rsshubResult;
  }
}
