import { Injectable } from '@nestjs/common';
import { Order, PrismaClient } from '@prisma/client';
import { OrderDto } from './dtos/Order';

@Injectable()
export class OrderService {
    constructor(private prisma: PrismaClient){}
   
}
