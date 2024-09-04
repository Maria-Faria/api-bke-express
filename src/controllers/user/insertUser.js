import { create, validateUser, validateUserToCreate } from "../../models/userModel.js";

const insertUser = async (req, res) => {
    const user = req.body;

    const userValidated = validateUserToCreate(user);

    console.log(userValidated);

    if(userValidated?.error) {
        return res.status(400).json({
            error: "Erro ao criar o usuário, verifique os dados!",
            fieldErrors: userValidated.error.flatten().fieldErrors
        });
    }

    const result = await create(user);

    if(!result) {
        return res.status(500).json({
            error: "Erro ao cadastrar o usuário"
        })
    }

    return res.json({
        success: "Usuário cadastrado com sucesso!",
        user:result
    })
};

export default insertUser;