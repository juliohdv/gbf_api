import { Injectable } from '@nestjs/common';
import { CreateOrdenDto } from './dto/create-orden.dto';
import { UpdateOrdenDto } from './dto/update-orden.dto';
import { Orden } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrdenService {
  constructor(
    private readonly prisma: PrismaService
  ){}
  async create(createOrdenDto: CreateOrdenDto) {
    // let municipio = this.prisma.municipio.findUnique({where:{id:createOrdenDto.municipioId}})
    return await this.prisma.orden.create(
      {data:{
        direccionRecoleccion: createOrdenDto.direccionRecoleccion,
        fechaProgramada: createOrdenDto.fechaProgramada,
        nombres: createOrdenDto.nombres,
        apellidos: createOrdenDto.apellidos,
        email: createOrdenDto.email,
        telefono: createOrdenDto.telefono,
        direccionDestino: createOrdenDto.direccionDestino,
        puntoReferencia: createOrdenDto.puntoReferencia,
        indicaciones: createOrdenDto.indicaciones,
        municipioId: createOrdenDto.municipioId
        
      }
      }
    );
  }

  async findAll() {
    return await this.prisma.orden.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.orden.findUniqueOrThrow({where:{id:id}});
  }

  async update(id: string, updateOrdenDto: UpdateOrdenDto) {
    return await this.prisma.orden.update(
      {
        where: {
          id: id
        },
        data:{
        direccionRecoleccion: updateOrdenDto.direccionRecoleccion,
        fechaProgramada: updateOrdenDto.fechaProgramada,
        nombres: updateOrdenDto.nombres,
        apellidos: updateOrdenDto.apellidos,
        email: updateOrdenDto.email,
        telefono: updateOrdenDto.telefono,
        direccionDestino: updateOrdenDto.direccionDestino,
        puntoReferencia: updateOrdenDto.puntoReferencia,
        indicaciones: updateOrdenDto.indicaciones,
        municipioId: updateOrdenDto.municipioId
      }}
    ) 
  }

  remove(id: number) {
    return `This action removes a #${id} orden`;
  }
}
