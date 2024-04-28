import { Injectable, OnModuleInit, Logger } from '@nestjs/common';

import { init, request } from 'rsshub';

init({});

@Injectable()
export class RSSService implements OnModuleInit {
  private readonly logger = new Logger(RSSService.name);

  constructor() {}

  async onModuleInit() {
    //
  }

  async get_rss(path: string): Promise<string> {
    this.logger.log(`get_rss: ${path}`);
    return await request(path);
  }
}
