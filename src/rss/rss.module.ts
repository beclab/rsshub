import { Module } from '@nestjs/common';
import { RSSController } from './rss.controller';
import { RSSService } from './rss.service';

@Module({
  imports: [],
  controllers: [RSSController],
  providers: [RSSService],
})
export class RSSModule {}
