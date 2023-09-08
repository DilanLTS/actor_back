import { Module } from '@nestjs/common';
import { ActorService } from './actor.service';
import { ActorController } from './actor.controller';
import { DatabaseModule } from 'src/database/database.module';
import { actorProviders } from './actor.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ActorController],
  providers: [
    ...actorProviders,
    ActorService,
  ],
})
export class ActorModule {}
