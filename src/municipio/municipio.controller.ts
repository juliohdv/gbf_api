import { Controller } from '@nestjs/common';
import { MunicipioService } from './municipio.service';

@Controller('municipio')
export class MunicipioController {
  constructor(private readonly municipioService: MunicipioService) {}
}
