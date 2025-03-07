import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService,
    ){}

    async login(username: string, pass: string): Promise<{access_token : string}>{
        const usuario = await this.usuarioService.buscar(username)
        if(usuario?.password !== pass){
            throw new UnauthorizedException();
        }
        const payload = {sub:usuario.id, username: usuario.username};
        
        return {access_token: await this.jwtService.signAsync(payload)};
    }
}
