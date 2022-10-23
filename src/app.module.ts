import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './Product/product.controller';
import { ProductService } from './Product/product.service';
import { CardModule } from './card/card.module';
import { CardController } from './card/card.controller';
import { CardService } from './card/card.service';
import { OrderModule } from './order/order.module';


@Module({
  imports: [],
  controllers: [CardController, ProductController],
  providers: [ProductService,CardService, PrismaClient],
},)

export class AppModule {

}
