import {
  ArgumentsHost,
  Catch,
  ConflictException,
  ExceptionFilter,
} from '@nestjs/common';
import { MongoError } from 'mongodb';

@Catch(MongoError)
export class CustomerMongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    switch (exception.code) {
      case 11000:
        response.status(400).json({
          message:
            'FOUND DUPLICATE DATA: ' +
            exception.message.replace(
              'E11000 duplicate key error collection: mo_db.customers index:',
              '',
            ),
        });
      default:
        response.status(500).json({ message: 'Internal error.' });
    }
  }
}
