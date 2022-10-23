import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Product = [
    {
        name : "Sushi",
        content : "Sushi",
        price : "20$"
    },
    {
        name : "burger",
        content : "burger",
        price : "20$"
    },
    {
        name : "bob's",
        content : "bob's",
        price : "20$"
    },
    {
        name : "crispy",
        content : "crispy",
        price : "20$"
    },
]

export async function seedProduct(){
    
    for(let i=0;i<Product.length;i++){
        await prisma.product.create({data:{
            ...Product[i]
        }})
    }
}
