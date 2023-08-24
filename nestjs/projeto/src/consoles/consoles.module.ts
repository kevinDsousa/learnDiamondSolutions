import { Module } from '@nestjs/common';
import { ConsolesService } from './consoles.service';
import { ConsolesController } from './consoles.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsolesSquemas } from './schemas/consoles.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Consoles',
        schema: ConsolesSquemas,
      },
    ]),
  ],
  controllers: [ConsolesController],
  providers: [ConsolesService],
})
export class ConsolesModule {}
