import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BultoService } from './bulto.service';
import { CreateBultoDto } from './dto/create-bulto.dto';
import { UpdateBultoDto } from './dto/update-bulto.dto';

@Controller('bulto')
export class BultoController {
  constructor(private readonly bultoService: BultoService) {}

  @Post()
  create(@Body() createBultoDto: CreateBultoDto) {
    return this.bultoService.create(createBultoDto);
  }

  @Get()
  findAll() {
    return this.bultoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bultoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBultoDto: UpdateBultoDto) {
    return this.bultoService.update(+id, updateBultoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bultoService.remove(+id);
  }
}
