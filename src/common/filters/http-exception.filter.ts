import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException
        ? exception.getResponse()
        : 'Esse é um erro interno do servidor, por gentileza, tente mais tarde.';

    console.error('🔥 [ExceptionFilter] Erro capturado:', exception);

    response.status(status).json({
      success: false,
      statusCode: status,
      message,
      path: request.url,
      timestamp: new Date().toISOString(),
    });
  }
}
// // ✅ O filtro de exceção AllExceptionsFilter captura todas as exceções não tratadas no aplicativo NestJS e formata a resposta de erro de maneira consistente. Ele registra o erro no console e envia uma resposta JSON ao cliente com detalhes sobre o erro, incluindo o código de status HTTP, a mensagem de erro e o caminho da solicitação. Isso ajuda a depurar problemas e fornece feedback útil ao cliente em caso de falhas.
// // ✅ O filtro de exceção AllExceptionsFilter é útil para capturar e tratar erros de forma centralizada em uma aplicação NestJS, permitindo que você forneça respostas consistentes e informativas para os clientes em caso de falhas. Ele também ajuda a registrar erros no console para facilitar a depuração durante o desenvolvimento.