import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'transaction', // Matches the package name in the .proto file
        protoPath: join(__dirname, '../grpc/transaction.proto'),
        url: '0.0.0.0:50051', // Or any other available port
      },
    },
  );
  await app.listen();
}
bootstrap();
