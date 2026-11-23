import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { Instructor } from './entities/instructor.entity.js';
import { CreateInstructorDto } from './dto/create-instructor.dto.js';
import { UpdateInstructorDto } from './dto/update-instructor.dto.js';

@Injectable()
export class InstructoresService {
    constructor(
        @InjectModel(Instructor.name) private readonly instructorModel: Model<Instructor>,
    ) {}

    // Guarda un instructor nuevo en la coleccion  
    async create(CreateInstructorDto: CreateInstructorDto) {
        return this.instructorModel.create(CreateInstructorDto)
    }

    // devuelve todos los instructores
    async findAll() {
        return this.instructorModel.find();
    }

    // busca un instructor por su id
    async findOne(id: string) {
        this.validarID(id);
        const instructor = await this.instructorModel.findById(id);
        if (!instructor) {
            throw new NotFoundException(`No existe un instructor con el id ${id}`);
        }
        return instructor;
    }

    // Revisa que el id tenga formato de MongoDB
    private validarID(id: string) {
        if (!isValidObjectId(id)) {
            throw new BadRequestException(`"${id}" no es un id válido`)
        }
    }

    // cambia los campos enviados y devuelve el instructor actualizado
    async update(id: string, updateInstructorDto: UpdateInstructorDto) {
        this.validarID(id);
        const instructor = await this.instructorModel.findByIdAndUpdate(
            id,
            updateInstructorDto,
            { returnDocument: 'after', runValidators: true },
        );
        if (!instructor) {
            throw new NotFoundException(`No existe una mascota con el id ${id}`)
        }
        return instructor;
    }

    // Elimina la mascota y coonfirma cual fue
    async remove(id: string) {
        this.validarID(id);
        const instructor = await this.instructorModel.findByIdAndDelete(id);
        if(!instructor) {
            throw new NotFoundException(`No existe un instructor con el id ${id}`)
        }
        return { mensaje: `${instructor.nombre} fue eliminado`, instructor};
    }

}
