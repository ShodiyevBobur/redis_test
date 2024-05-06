import { Inject, Injectable , OnModuleDestroy} from '@nestjs/common';
import { CreateRediDto } from './dto/set-redis.dto';
import { REDIS_CLIENT, RedisClient } from './redis-client.type';


@Injectable()
export class  RedisService  implements OnModuleDestroy{

  constructor(
    @Inject(REDIS_CLIENT) private readonly redisClient:RedisClient
  ){}

  onModuleDestroy(){
    this.redisClient.quit()
  }

  ping(){
    return this.redisClient.ping()
  }

  async set (setRedisDto: CreateRediDto): Promise<string>{
    const {key, value} = setRedisDto
    await this.redisClient.set(key,value)
    return `Set value to Redis:${value}`
  }

  async get(key:string):Promise<string>{
    const retrievedValue = await this.redisClient.get(key)

    return `Get value from Redis: ${retrievedValue}`
  }

 
}
