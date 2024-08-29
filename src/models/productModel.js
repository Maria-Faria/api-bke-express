import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAll = async () => {
    const allProducts = await prisma.product.findMany();

    return allProducts;
};

export const create = async (product) => { 
    const result = await prisma.product.create({
        data: product,
        select: {
            id: true,
            name: true,
            price: true,
            stock: true
        }
    });

    return result;
};

export const getProductById = async (id) => {
    const product = await prisma.product.findUnique({
        where: {id},
        select: {
            id: true,
            name: true,
            price: true,
            stock: true
        }
    });

    return product;
}

export const updateProduct = async (product) => {
    const result = await prisma.product.update({
        where: {id: product.id},
        data: product,
        select: {
            id: true,
            name: true,
            price: true,
            stock: true
        }
    });

    return result;
}

export const removeProduct = async (id) => {
    const product = await prisma.product.delete({
        where: {id},
        select: {
            id: true,
            name: true,
            price: true,
            stock: true
        }
    });

    return product;
}