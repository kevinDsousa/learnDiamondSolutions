import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { ConsolesModule } from 'src/consoles/consoles.module';
import { CompaniesModule } from 'src/companies/companies.module';

@Module({
  imports: [
    ConsolesModule, 
    CompaniesModule
  ],
  controllers: [GamesController],
  providers: [GamesService],
})
export class GamesModule {}
