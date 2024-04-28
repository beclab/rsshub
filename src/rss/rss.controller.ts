import { Controller, Get, Query, Logger } from '@nestjs/common';

import { RSSService } from './rss.service';

@Controller('/rss')
export class RSSController {
  private readonly logger = new Logger(RSSController.name);

  constructor(private readonly rssService: RSSService) {}

  @Get('/')
  async get_rss(@Query('path') path: string): Promise<string> {
    return await this.rssService.get_rss(path);
  }
}
