import { Module } from '@nestjs/common';

import { RSSModule } from './rss/rss.module';

@Module({
  imports: [RSSModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
