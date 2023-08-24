import { Module } from '@nestjs/common';
import { DeveloperService } from './developer.service';
import { DeveloperController } from './developer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DevelopersSquemas } from './schemas/developers.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Developer',
        schema: DevelopersSquemas,
      },
    ]),
  ],
  controllers: [DeveloperController],
  providers: [DeveloperService],
})
export class DeveloperModule {}
