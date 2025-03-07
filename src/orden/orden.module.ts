import { Module } from '@nestjs/common';
import { OrdenService } from './orden.service';
import { OrdenController } from './orden.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [OrdenController],
  providers: [OrdenService],
  exports: [OrdenService],
  imports: [PrismaModule]
})
export class OrdenModule {}
