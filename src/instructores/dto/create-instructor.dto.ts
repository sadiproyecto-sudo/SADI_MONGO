import {
    IsNotEmpty,IsString,
} from 'class-validator';
export class CreateInstructorDto {
    @IsString({ message: 'El nombre debe ser texto' })
    @IsNotEmpty({ message: 'El nombre es obligatorio' })
    nombre: string;

    @IsString({ message: 'El apellido debe ser texto' })
    @IsNotEmpty({ message: 'El apellido es obligatorio' })
    apellido: string;

    @IsString({ message: 'El email debe ser un email válido' })
    @IsNotEmpty({ message: 'El email es obligatorio' })
    email: string;
}