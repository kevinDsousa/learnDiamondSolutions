import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GamesModule } from './games/games.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URL), GamesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
