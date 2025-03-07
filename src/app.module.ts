import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { MunicipioModule } from './municipio/municipio.module';
import { OrdenModule } from './orden/orden.module';
import { BultoModule } from './bulto/bulto.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [AuthModule, UsuarioModule, DepartamentoModule, MunicipioModule, OrdenModule, BultoModule],
})
export class AppModule {}
