import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TempsService } from './temps.service';
import { CreateTempDto } from './dto/create-temp.dto';
import { UpdateTempDto } from './dto/update-temp.dto';

@Controller('temps')
export class TempsController {
  constructor(private readonly tempsService: TempsService) {}

  @Post()
  create(@Body() createTempDto: CreateTempDto) {
    return this.tempsService.create(createTempDto);
  }

  @Get()
  findAll() {
    return this.tempsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tempsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTempDto: UpdateTempDto) {
    return this.tempsService.update(+id, updateTempDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tempsService.remove(+id);
  }
}
