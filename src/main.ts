import { ValidationPipe } from '@nestjs/common'; 
import { NestFactory } from '@nestjs/core'; 
import { AppModule } from './app.module.js'; 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Revisa cada @Body() contra su DTO antes de llegar al controller
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // permite que el frontend de Vite consuma API
  app.enableCors({ origin: 'http://localhost:5173'})


  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();