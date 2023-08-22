import { Module } from '@nestjs/common';
import { ConsolesService } from './consoles.service';
import { ConsolesController } from './consoles.controller';

@Module({
  controllers: [ConsolesController],
  providers: [ConsolesService],
})
export class ConsolesModule {}
