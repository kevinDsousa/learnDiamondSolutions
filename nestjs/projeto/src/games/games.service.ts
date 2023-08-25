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
  public async create(createGameDto: CreateGameDto) {
    try {
      const createGame = await this.developerModel.create(createGameDto);
      return createGame;
    } catch (error) {
      throw new Error(`Erro ao criar um game: ${error.message}`);
    }
  }

  public async findAll() {
    return this.developerModel.find();
  }

  findOne(id: number) {
    return this.developerModel.findById(id);
  }

  public async update(id: string, updateGameDto: UpdateGameDto) {
    const filter = { _id: id };

    try {
      const updateGame = await this.developerModel.findByIdAndUpdate(
        filter,
        updateGameDto,
        { new: true },
      );
      return updateGame;
    } catch (error) {
      throw new Error(`Erro ao atualizar o game: ${error.message}`);
    }
  }

  public async remove(id: string) {
    const filter = { _id: id };

    try {
      const deleteGame = await this.developerModel.findByIdAndDelete(filter);
      return deleteGame;
    } catch (error) {
      throw new Error(`Erro ao apagar o console: ${error.message}`);
    }
  }
}
