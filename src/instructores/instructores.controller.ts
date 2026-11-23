import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { InstructoresService } from './instructores.service.js';
import { CreateInstructorDto } from './dto/create-instructor.dto.js';
import {UpdateInstructorDto } from './dto/update-instructor.dto.js';

@Controller('instructores')
export class InstructoresController {
    constructor(private readonly instructoresService: InstructoresService) {}

    @Post()
    create(@Body() createInstructorDto: CreateInstructorDto) {
        return this.instructoresService.create(createInstructorDto);
    }

    @Get()
    findAll() {
        return this.instructoresService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.instructoresService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateInstructorDto: UpdateInstructorDto){
        return this.instructoresService.update(id, updateInstructorDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.instructoresService.remove(id)
    }
}
