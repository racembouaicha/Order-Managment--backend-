import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Product } from '@prisma/client';
import { ProductDto } from './dto/Product';

import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @ApiTags('product')
    @Post('/product/create')
    create(@Body() createProductDto: ProductDto) {
        return this.productService.create(createProductDto);
      }
}
