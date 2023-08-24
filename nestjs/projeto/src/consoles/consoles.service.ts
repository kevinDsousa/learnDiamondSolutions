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
    return createConsoleDto;
  }

  public async findAll() {
    return this.consolesModel.find();
  }

  public async findOne(id: number) {
    return this.consolesModel.findById(id);
  }

  public async update(id: number, updateConsoleDto: UpdateConsoleDto) {
    return updateConsoleDto;
  }

  public async remove(id: number) {
    return `This action removes a #${id} console`;
  }
}
