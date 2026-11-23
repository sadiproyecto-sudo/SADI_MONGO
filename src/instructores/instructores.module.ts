import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Instructor, InstructorSchema } from './entities/instructor.entity.js';
import { InstructoresService } from './instructores.service.js';
import { InstructoresController } from './instructores.controller.js';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Instructor.name, schema: InstructorSchema }]),
  ],
  providers: [InstructoresService],
  controllers: [InstructoresController]
})
export class InstructoresModule {}
