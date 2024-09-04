import { PrismaClient } from "@prisma/client";
import { z } from 'zod';

const prisma = new PrismaClient();

const userSchema = z.object({
    id: z.number({ required_error: "O ID é obrigatório", invalid_type_error: "O ID deve ser um número inteiro" })
    .positive({ message: "O ID deve ser um número positivo." }),   

    name: z.string({ required_error: "O nome é obrigatório", invalid_type_error: "O nome deve ser uma string" })
    .min(2, {message: "O nome deve ter no mínimo 2 caracteres"})
    .max(100, {message: "O nome deve ter no máximo 100 caracteres."}),

    email: z.string({ required_error: "O e-mail é obrigatório", invalid_type_error: "O e-mail deve ser uma string" })
    .email()
    .max(200, {message: "O e-mail deve ter no máximo 200 caracteres."}),

    password: z.string({required_error: "A senha é obrigatória", invalid_type_error: "A senha deve ser uma string"})
    .min(6, {message: "A senha deve ter no mínimo 6 caracteres."})
    .max(256, {message: "A senha deve ter no máximo 256 caracteres."})  
});

export const validateUser = (user) => {
    return userSchema.safeParse(user);
}

export const validateUserToCreate = (user) => {
    const partialUserSchema = userSchema.partial({
        id: true
    });

    return partialUserSchema.safeParse(user);
}
export const getAll = async () => {
    const allUsers = await prisma.user.findMany({
        select:{
            id: true,
            name: true,
            email: true
        }
    });

    return allUsers;
};

export const getById = async (id) => {
    const user = await prisma.user.findUnique({
        where: {
            id
        },

        select: {
            id: true,
            name: true,
            email: true
        }
    });

    return user;
};

export const create = async (user) => {
    const result = await prisma.user.create({
        data: user,
        select: {
            id: true,
            name: true,
            email: true
        }
    });

    return result;
};

export const removeUser = async (id) => {
    const user = await prisma.user.delete({
        where: {id},
        select: {
            id: true,
            name: true,
            email: true
        }
    });

    return user;
};

export const updateUserData = async (user) => {
    const result = await prisma.user.update({
        where: {
            id: user.id
        },
        data: user,
        select: {
            id: true,
            name: true,
            email: true
        }
    });

    return result;
};