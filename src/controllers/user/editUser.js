import { getById, updateUserData } from "../../models/userModel.js";

const editUser = async (req, res) => {
    const { id } = req.params;
    const user = req.body;

    user.id = +id;

    const result = await updateUserData(user);

    if(!result) {
        return res.status(401).json({error: "Erro ao editar o usuário"});
    }

    return res.json({success: "Usuário editado com sucesso!", user: result});
};

export default editUser;