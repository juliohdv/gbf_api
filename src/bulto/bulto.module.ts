import { Module } from '@nestjs/common';
import { BultoService } from './bulto.service';
import { BultoController } from './bulto.controller';

@Module({
  controllers: [BultoController],
  providers: [BultoService],
})
export class BultoModule {}
