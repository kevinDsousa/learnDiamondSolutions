import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Games } from './models/games.modules';
import { Model } from 'mongoose';

@Injectable()
export class GamesService {
  constructor(
    @InjectModel('Games')
    private readonly developerModel: Model<Games>,
  ) {}
  create(createGameDto: CreateGameDto) {
    return createGameDto;
  }

  findAll() {
    return this.developerModel.findOne();
  }

  findOne(id: number) {
    return this.developerModel.findById(id);
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return updateGameDto;
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }
}
