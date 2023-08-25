import { Injectable } from '@nestjs/common';
import { CreateConsoleDto } from './dto/create-console.dto';
import { UpdateConsoleDto } from './dto/update-console.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Consoles } from './models/consoles.modules';
import { Model } from 'mongoose';

@Injectable()
export class ConsolesService {
  constructor(
    @InjectModel('Consoles')
    private readonly consolesModel: Model<Consoles>,
  ) {}

  public async create(createConsoleDto: CreateConsoleDto) {
    try {
      const createConsole = await this.consolesModel.create(createConsoleDto);
      return createConsole;
    } catch (error) {
      throw new Error(`Erro ao criar um console: ${error.message}`);
    }
  }

  public async findAll() {
    return this.consolesModel.find();
  }

  public async findOne(id: number) {
    return this.consolesModel.findById(id);
  }

  public async update(id: string, updateConsoleDto: UpdateConsoleDto) {
    const filter = { _id: id };

    try {
      const updateConsole = await this.consolesModel.findByIdAndUpdate(
        filter,
        updateConsoleDto,
        { new: true },
      );
      return updateConsole;
    } catch (error) {
      throw new Error(`Erro ao atualizar o console: ${error.message}`);
    }
  }

  public async remove(id: string) {
    const filter = { _id: id };

    try {
      const deleteConsole = await this.consolesModel.findByIdAndDelete(filter);
      return deleteConsole;
    } catch (error) {
      throw new Error(`Erro ao apagar o console: ${error.message}`);
    }
  }
}
