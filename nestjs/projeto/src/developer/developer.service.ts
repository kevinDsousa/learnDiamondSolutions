import { Injectable } from '@nestjs/common';
import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateDeveloperDto } from './dto/update-developer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Developer } from './entities/developer.entity';

@Injectable()
export class DeveloperService {
  constructor(
    @InjectModel('Developer')
    private readonly developerModel: Model<Developer>,
  ) {}

  create(createDeveloperDto: CreateDeveloperDto) {
    return createDeveloperDto;
  }

  findAll() {
    return this.developerModel.find();
  }

  findOne(id: number) {
    return this.developerModel.findById(id);
  }

  update(id: number, updateDeveloperDto: UpdateDeveloperDto) {
    return updateDeveloperDto;
  }

  remove(id: number) {
    return `This action removes a #${id} developer`;
  }
}
