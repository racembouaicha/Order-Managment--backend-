import { Injectable } from '@nestjs/common';
import { Card, PrismaClient } from '@prisma/client';
import { CardDto } from './dtos/Card';

@Injectable()
export class CardService {
    constructor(private prisma: PrismaClient){}
    async create(product: CardDto):Promise<Card> {
        return this.prisma.card.create({
            data :{
                numbreProduct : product.numbreProduct,
                ProductId:   product.Productid,
             
                }
                })
            } 
        
    }

