import { create, validateUser, validateUserToCreate } from "../../models/userModel.js";
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';

const insertUser = async (req, res) => {
    try {
        const user = req.body;
        
        const userValidated = validateUserToCreate(user);

        console.log(userValidated);

        if (userValidated?.error) {
            return res.status(400).json({
                error: "Erro ao criar o usuário, verifique os dados!",
                fieldErrors: userValidated.error.flatten().fieldErrors
            });
        }

        userValidated.data.public_id = uuid();
        userValidated.data.password = bcrypt.hashSync(userValidated.data.password, 10);

        const result = await create(userValidated.data);

        return res.json({
            success: "Usuário cadastrado com sucesso!",
            user: result
        })
    } catch (error) {
        console.log(error);

        if(error.code === 'P2002') {
            return res.status(400).json({
                error: "Email já cadastrado"
            })
        }
        
        return res.status(500).json({
            error: "Erro ao cadastrar o usuário"
        })
    }
    
};

export default insertUser;