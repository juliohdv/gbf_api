import { PartialType } from '@nestjs/mapped-types';
import { CreateBultoDto } from './create-bulto.dto';

export class UpdateBultoDto extends PartialType(CreateBultoDto) {}
