import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { MongooseModule } from '@nestjs/mongoose';
import { InstructoresModule } from './instructores/instructores.module.js';

@Module({
 imports: [
 // 1. Lee el archivo .env y deja sus variables disponibles en todo el proyecto
 ConfigModule.forRoot({ isGlobal: true }),
 MongooseModule.forRoot(process.env.MONGO_URI!),
 InstructoresModule,
 ],
 controllers: [AppController],
 providers: [AppService],
})
export class AppModule {}