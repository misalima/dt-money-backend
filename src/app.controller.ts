/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTransactionDTO } from './dto/createTransaction.dto';

@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/transaction')
  async createTransaction(@Body() data: CreateTransactionDTO) {
    const createdTransaction = await this.appService.createTransaction(data);
    return createdTransaction;
  }

}
