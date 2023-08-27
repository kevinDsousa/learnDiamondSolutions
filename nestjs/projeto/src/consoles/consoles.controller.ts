import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ConsolesService } from './consoles.service';
import { CreateConsoleDto } from './dto/create-console.dto';
import { UpdateConsoleDto } from './dto/update-console.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Consoles')
@Controller('consoles')
export class ConsolesController {
  constructor(private readonly consolesService: ConsolesService) {}

  @ApiResponse({ status: 409, description: 'Conflito de consoles' })
  @Post()
  create(@Body() createConsoleDto: CreateConsoleDto) {
    return this.consolesService.create(createConsoleDto);
  }

  @ApiResponse({ status: 409, description: 'Erro de parametros' })
  @Get()
  findAll() {
    return this.consolesService.findAll();
  }

  @ApiResponse({ status: 409, description: 'Erro de parametros pelo id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consolesService.findOne(id);
  }

  @ApiResponse({ status: 409, description: 'Erro de parametros pelo id' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsoleDto: UpdateConsoleDto) {
    return this.consolesService.update(id, updateConsoleDto);
  }

  @ApiResponse({ status: 409, description: 'Erro de delecao' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consolesService.remove(id);
  }
}
