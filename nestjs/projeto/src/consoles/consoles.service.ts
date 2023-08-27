import { Injectable } from '@nestjs/common';
import { CreateConsoleDto } from './dto/create-console.dto';
import { UpdateConsoleDto } from './dto/update-console.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Consoles } from './models/consoles.modules';
import { Model } from 'mongoose';
import { NotFoundError } from 'src/common/types/NotFoundError';
import { Console } from './entities/console.entity';

@Injectable()
export class ConsolesService {
  constructor(
    @InjectModel('Consoles')
    private readonly consolesModel: Model<Consoles>,
  ) {}

  public async create(createConsoleDto: CreateConsoleDto) {
    const createConsole = await this.consolesModel.create(createConsoleDto);
    if (!createConsole) {
      throw new Error('teste');
    }
    return createConsole;
  }

  public async findAll() {
    return this.consolesModel.find();
  }

  public async findOne(id: string): Promise<Console> {
    const filter = { _id: id };

    const findConsole = this.consolesModel.findById(filter);
    if (!findConsole) {
      throw new NotFoundError('Console não encontrado');
    }
    return findConsole;
  }

  public async update(id: string, updateConsoleDto: UpdateConsoleDto) {
    const filter = { _id: id };
    const updateConsole = await this.consolesModel.findByIdAndUpdate(
      filter,
      updateConsoleDto,
      { new: true },
    );
    if (!updateConsole) {
      throw new NotFoundError(`Não foi possivel atualizar o objeto ${filter}`);
    }
    return updateConsole;
  }

  public async remove(id: string) {
    const filter = { _id: id };
    const deleteConsole = await this.consolesModel.findByIdAndDelete(filter);

    if (!deleteConsole) {
      throw new NotFoundError(`Não localizado o console informado ${id}`);
    }
    return deleteConsole;
  }
}
