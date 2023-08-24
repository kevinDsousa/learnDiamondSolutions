import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConsolesService } from './consoles.service';
import { CreateConsoleDto } from './dto/create-console.dto';
import { UpdateConsoleDto } from './dto/update-console.dto';

@Controller('consoles')
export class ConsolesController {
  constructor(private readonly consolesService: ConsolesService) {}

  @Post()
  create(@Body() createConsoleDto: CreateConsoleDto) {
    return this.consolesService.create(createConsoleDto);
  }

  @Get()
  findAll() {
    return this.consolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consolesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsoleDto: UpdateConsoleDto) {
    return this.consolesService.update(+id, updateConsoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consolesService.remove(+id);
  }
}
