import { PrismaClient } from '@prisma/client'

import {seedProduct} from "./SeedProduct/Product"
const prisma = new PrismaClient();

async function seed(){
    await seedProduct();

}

seed().then(() => {
    console.log("SeedProduct saved successfully");
}).catch((error) => {
    console.log(error);
    process.exit(1);
});