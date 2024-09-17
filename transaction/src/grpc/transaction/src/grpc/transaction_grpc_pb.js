/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-require-imports */
// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var transaction_src_grpc_transaction_pb = require('../../../transaction/src/grpc/transaction_pb.js');

function serialize_transaction_CreateTransactionRequest(arg) {
  if (!(arg instanceof transaction_src_grpc_transaction_pb.CreateTransactionRequest)) {
    throw new Error('Expected argument of type transaction.CreateTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_CreateTransactionRequest(buffer_arg) {
  return transaction_src_grpc_transaction_pb.CreateTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_CreateTransactionResponse(arg) {
  if (!(arg instanceof transaction_src_grpc_transaction_pb.CreateTransactionResponse)) {
    throw new Error('Expected argument of type transaction.CreateTransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_CreateTransactionResponse(buffer_arg) {
  return transaction_src_grpc_transaction_pb.CreateTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TransactionServiceService = exports.TransactionServiceService = {
  createTransaction: {
    path: '/transaction.TransactionService/CreateTransaction',
    requestStream: false,
    responseStream: false,
    requestType: transaction_src_grpc_transaction_pb.CreateTransactionRequest,
    responseType: transaction_src_grpc_transaction_pb.CreateTransactionResponse,
    requestSerialize: serialize_transaction_CreateTransactionRequest,
    requestDeserialize: deserialize_transaction_CreateTransactionRequest,
    responseSerialize: serialize_transaction_CreateTransactionResponse,
    responseDeserialize: deserialize_transaction_CreateTransactionResponse,
  },
};

exports.TransactionServiceClient = grpc.makeGenericClientConstructor(TransactionServiceService);
