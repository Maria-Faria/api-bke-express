import { create } from "../../models/userModel.js";

const insertUser = async (req, res) => {
    const user = req.body;

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