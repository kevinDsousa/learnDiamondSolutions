import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesModule } from './games/games.module';
import { ConsolesModule } from './consoles/consoles.module';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [GamesModule, ConsolesModule, CompaniesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
