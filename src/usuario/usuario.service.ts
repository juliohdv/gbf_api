import { Injectable } from '@nestjs/common';

export type Usuario = any;

@Injectable()
export class UsuarioService {
    private readonly usuarios = [
        {
            Id: 1,
            username: 'admin',
            password : 'admin'
        }
    ];

    async buscar(username: string): Promise <Usuario | undefined>{
        return this.usuarios.find(usuario => usuario.username === username);
    }
}
