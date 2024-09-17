import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  CreateTransactionRequest,
  CreateTransactionResponse,
} from '../grpc/transaction_pb';
import { TransactionService } from '../services/transaction.service';

@Controller()
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @GrpcMethod('TransactionService', 'CreateTransaction')
  async createTransaction(
    request: CreateTransactionRequest,
  ): Promise<CreateTransactionResponse> {
    try {
      const transactionId = await this.transactionService.createTransaction(
        request.getProcessorId(),
        request.getType(),
        JSON.parse(request.getData()),
      );
      return new CreateTransactionResponse()
        .setId(transactionId)
        .setSuccess(true);
    } catch (error) {
      return new CreateTransactionResponse()
        .setSuccess(false)
        .setMessage(error.message);
    }
  }
}
