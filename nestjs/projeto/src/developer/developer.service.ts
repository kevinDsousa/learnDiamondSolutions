import { Injectable } from '@nestjs/common';
import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateDeveloperDto } from './dto/update-developer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Developer } from './entities/developer.entity';
import { NotFoundError } from 'src/common/types/NotFoundError';

@Injectable()
export class DeveloperService {
  constructor(
    @InjectModel('Developer')
    private readonly developerModel: Model<Developer>,
  ) {}

  public async create(createDeveloperDto: CreateDeveloperDto) {
    try {
      const createDeveloper =
        await this.developerModel.create(createDeveloperDto);
      return createDeveloper;
    } catch (error) {
      throw new Error(`Erro ao criar um developer ${error.message}`);
    }
  }

  public async findAll() {
    return this.developerModel.find();
  }

  public async findOne(id: string) {
    const filter = { _id: id };
    const FindDeveloper = this.developerModel.findById(filter);

    if (!FindDeveloper) {
      throw new NotFoundError('Developer não encontrado');
    }

    return FindDeveloper;
  }

  public async update(id: string, updateDeveloperDto: UpdateDeveloperDto) {
    const filter = { _id: id };
    const updateDeveloper = await this.developerModel.findByIdAndUpdate(
      filter,
      updateDeveloperDto,
      { new: true },
    );
    if (!updateDeveloper) {
      throw new NotFoundError(`Developer não localizado ${filter}`);
    }
    return updateDeveloper;
  }

  public async remove(id: string) {
    const filter = { _id: id };

    const deleteConsole = await this.developerModel.findOneAndDelete(filter);
    if (!deleteConsole) {
      throw new NotFoundError(`Developer não localizado ${filter}`);
    }
    return deleteConsole;
  }
}
