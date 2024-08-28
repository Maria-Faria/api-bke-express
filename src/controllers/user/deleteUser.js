import { removeUser } from "../../models/userModel.js";

const deleteUser = async (req, res) => {
    const { id } = req.params;

    const user = await removeUser(+id);

    if(!user) {
        return res.status(404).json({error: "Erro ao remover usuário"});
    }

    return res.json({
        success: "Usuário removido com sucesso!",
        user
    })
};

export default deleteUser;