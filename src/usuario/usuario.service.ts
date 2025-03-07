import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Usuario } from '@prisma/client';



@Injectable()
export class UsuarioService {
    constructor(
        private readonly prisma : PrismaService,
    ){}

    async buscar(username?: string): Promise <any>{
        let usuario;
        usuario = await this.prisma.usuario.findFirst({where:{username:username}});
        return usuario

    }

    async crear(email:string, username?:string, password?:string){
        return this.prisma.usuario.create({data:{email:email,username:username, password:password}});
    }
}
