import { Controller } from '@nestjs/common';
import { DepartamentoService } from './departamento.service';

@Controller('departamento')
export class DepartamentoController {
  constructor(private readonly departamentoService: DepartamentoService) {}
}
