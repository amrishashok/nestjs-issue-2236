import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { Logger } from '@nestjs/common';
const url = 'mqtt://iot.eclipse.org';

async function bootstrap() {
    const app = await NestFactory.createMicroservice(AppModule, {
        transport: Transport.MQTT,
        options: {
            url: url
        }
    });
	await app.listenAsync();
	Logger.log('Connected to broker successfully');
}
bootstrap();