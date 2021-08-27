import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    CustomerModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const uri =
          'mongodb://' +
          config.get('MONGO_USER') +
          ':' +
          encodeURIComponent(config.get('MONGO_PASSWORD')) +
          '@' +
          config.get('MONGO_HOST') +
          ':' +
          config.get('MONGO_PORT') +
          '/' +
          config.get('MONGO_DB');
        return {
          uri,
          useNewUrlParser: true,
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
