import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { RedisModule } from './redis/redis.module';
import { AppController } from './app.controller';

@Module({
  imports: [RedisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
