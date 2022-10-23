import { Injectable,  } from '@nestjs/common';
import { Product } from '@prisma/client';
import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { ProductDto } from './dto/Product';



@Injectable()
export class ProductService {
    constructor(private prisma: PrismaClient){}
    async create(product: ProductDto):Promise<Product> {
        return this.prisma.product.create({
            data :{
                name : product.name,
                content : product.content,
                price : product.price,
            } 
        });
    }
}


