import { Controller, Body, Post, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsuarioService } from 'src/usuario/usuario.service';
import { AuthGuard } from './auth.guards';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usuarioService: UsuarioService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginDto: Record<string, any>){
    return this.authService.login(loginDto.username, loginDto.pass);
  }

  @Post('registrar')
  registrar(
    @Body('email') email:string,
    @Body('username') username:string,
    @Body('pass') pass:string,
  ){
    return this.usuarioService.crear(email,username,pass)
  }
}
