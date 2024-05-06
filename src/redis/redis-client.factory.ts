import { FactoryProvider } from '@nestjs/common';
import { REDIS_CLIENT, RedisClient } from './redis-client.type';
import { createClient } from 'redis';

export const redisClientFactory: FactoryProvider<Promise<RedisClient>> = {
  provide: REDIS_CLIENT,
  useFactory: async () => {
    const client = createClient({
      url: 'redis://default:Z5NWH7dkEqDAGh3DBEkak6EegW11A7Fq@redis-18488.c250.eu-central-1-1.ec2.redns.redis-cloud.com:18488',
    });
    await client.connect();
    return client;
  },
};