import { removeUser } from "../../models/userModel.js";

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await removeUser(+id);

        return res.json({
            success: "Usuário removido com sucesso!",
            user
        })
    } catch (error) {
        console.log(error.code);

        if(error.code === 'P2025') {
            return res.status(404).json({
                error: "Erro ao remover usuário"
            });
        }

        return res.status(500).json({
            error: "Erro no servidor, tente novamente!"
        })
    }


    /*if(!user) {
        return res.status(404).json({error: "Erro ao remover usuário"});
    }*/

};

export default deleteUser;