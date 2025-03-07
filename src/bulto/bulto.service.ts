import { Injectable } from '@nestjs/common';
import { CreateBultoDto } from './dto/create-bulto.dto';
import { UpdateBultoDto } from './dto/update-bulto.dto';

@Injectable()
export class BultoService {
  create(createBultoDto: CreateBultoDto) {
    return 'This action adds a new bulto';
  }

  findAll() {
    return `This action returns all bulto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bulto`;
  }

  update(id: number, updateBultoDto: UpdateBultoDto) {
    return `This action updates a #${id} bulto`;
  }

  remove(id: number) {
    return `This action removes a #${id} bulto`;
  }
}
