import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { AppService } from './app.service';
import { AppEntity } from './entity/app';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectRepository(AppEntity)
    private appRepository: MongoRepository<AppEntity>,
  ) {}

  @Get()
  async getHello(): Promise<AppEntity[]> {
    return await this.appRepository.find();
  }
}
