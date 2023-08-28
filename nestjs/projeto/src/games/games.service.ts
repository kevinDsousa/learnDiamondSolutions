import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Games } from './models/games.modules';
import { Model } from 'mongoose';
import { NotFoundError } from 'src/common/types/NotFoundError';

@Injectable()
export class GamesService {
  constructor(
    @InjectModel('Games')
    private readonly developerModel: Model<Games>,
  ) {}
  public async create(createGameDto: CreateGameDto) {
    try {
      const createGame = await this.developerModel.create(createGameDto);
      return createGame.save();
    } catch (error) {
      throw new Error(`Erro ao criar um game: ${error.message}`);
    }
  }

  public async findAll() {
    return this.developerModel.find();
  }

  findOne(id: string) {
    const filter = { _id: id };
    const findGame = this.developerModel.findById(filter);
    if (!findGame) {
      throw new NotFoundError(`Jogo não localizado ${filter}`);
    }
  }

  public async update(id: string, updateGameDto: UpdateGameDto) {
    const filter = { _id: id };

    const updateGame = await this.developerModel.findByIdAndUpdate(
      filter,
      updateGameDto,
      { new: true },
    );
    if (!updateGame) {
      throw new NotFoundError(`Jogo não localizado ${filter}`);
    }
    return updateGame;
  }

  public async remove(id: string) {
    const filter = { _id: id };
    const deleteGame = await this.developerModel.findByIdAndDelete(filter);
    if (!deleteGame) {
      throw new NotFoundError(`Jogo não localizado ${filter}`);
    }
    return deleteGame;
  }
}
