import 'reflect-metadata';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn'],
  });
  await app.listen(8082);

  const logger = new Logger('Bootstrap');
  logger.log('NestJS MCP HTTP 서버가 8082번 포트에서 대기 중입니다.');

  const handleShutdown = async (signal: string) => {
    logger.log(`${signal} 수신, MCP 서버를 종료합니다.`);
    await app.close();
    process.exit(0);
  };

  process.on('SIGINT', () => handleShutdown('SIGINT'));
  process.on('SIGTERM', () => handleShutdown('SIGTERM'));
}

bootstrap().catch((error) => {
  const logger = new Logger('Bootstrap');
  logger.error('MCP 서버 초기화에 실패했습니다.', error);
  process.exit(1);
});
