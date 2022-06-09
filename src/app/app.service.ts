import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { AppEntity } from './app.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(AppEntity)
    private appRepository: MongoRepository<AppEntity>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  async create() {
    const create = await this.appRepository.create({ name: 'aaa' });
    return;
  }
  async find() {
    return this.appRepository.find();
  }
}
