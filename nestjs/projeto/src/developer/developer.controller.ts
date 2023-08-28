import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DeveloperService } from './developer.service';
import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateDeveloperDto } from './dto/update-developer.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Developers')
@Controller('developer')
export class DeveloperController {
  constructor(private readonly developerService: DeveloperService) {}

  @ApiResponse({ status: 409, description: 'Erro ao criar developers' })
  @Post()
  create(@Body() createDeveloperDto: CreateDeveloperDto) {
    return this.developerService.create(createDeveloperDto);
  }

  @ApiResponse({ status: 409, description: 'Erro ao buscar developers' })
  @Get()
  findAll() {
    return this.developerService.findAll();
  }

  @ApiResponse({
    status: 409,
    description: 'Erro ao budscar pelo id developers',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.developerService.findOne(id);
  }

  @ApiResponse({ status: 409, description: 'Erro ao atualizar developers' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDeveloperDto: UpdateDeveloperDto,
  ) {
    return this.developerService.update(id, updateDeveloperDto);
  }

  @ApiResponse({ status: 409, description: 'Erro ao deletar developers' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.developerService.remove(id);
  }
}
