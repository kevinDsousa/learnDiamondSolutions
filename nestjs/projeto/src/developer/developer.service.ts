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

  async create(createDeveloperDto: CreateDeveloperDto) {
    try {
      const createDeveloper =
        await this.developerModel.create(createDeveloperDto);
      return createDeveloper;
    } catch (error) {
      throw new Error(`Erro ao criar um developer ${error.message}`);
    }
  }

  findAll() {
    return this.developerModel.find();
  }

  findOne(id: number) {
    return this.developerModel.findById(id);
  }

  async update(id: string, updateDeveloperDto: UpdateDeveloperDto) {
    const filter = { _id: id };

    try {
      const updateDeveloper = await this.developerModel.findByIdAndUpdate(
        filter,
        updateDeveloperDto,
        { new: true },
      );
      return updateDeveloper;
    } catch (error) {
      throw new Error(`Erro ao atualizar o developer: ${error.message}`);
    }
  }

  async remove(id: string) {
    const filter = { _id: id };

    try {
      const deleteConsole = await this.developerModel.findOneAndDelete(filter);
      return deleteConsole;
    } catch (error) {
      throw new Error(`Erro ao apagar o console: ${error.message}`);
    }
  }
}
