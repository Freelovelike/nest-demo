import { Controller, Get } from '@nestjs/common';
import { AppEntity } from './app.entity';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  async getHello(): Promise<AppEntity[]> {
    return await this.appService.find();
  }
}
