import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppEntity } from './app.entity';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'nest',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      entities: ['/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([AppEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
