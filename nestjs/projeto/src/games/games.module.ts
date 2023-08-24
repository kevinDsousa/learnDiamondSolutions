import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GamesSquemas } from './schemas/games.schema';
import { ConsolesModule } from 'src/consoles/consoles.module';
import { DeveloperModule } from 'src/developer/developer.module';

@Module({
  imports: [
    ConsolesModule,
    DeveloperModule,
    MongooseModule.forFeature([
      {
        name: 'Games',
        schema: GamesSquemas,
      },
    ]),
  ],
  controllers: [GamesController],
  providers: [GamesService],
})
export class GamesModule {}
