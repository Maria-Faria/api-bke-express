import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAll = async () => {
    const allProducts = await prisma.product.findMany();

    return allProducts;
};

export const create = () => { };