import { validateUserToLogin, getByEmail } from "../../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from "../../config.js";

const login = async (req, res) => {
    try {
        const login = req.body;
        const loginValidated = validateUserToLogin(login);

        if(loginValidated?.error) {
            return res.status(400).json({
                error: "Erro ao logar, verifique os dados!",
                fieldErrors: loginValidated.error.flatten().fieldErrors
            })
        }

        //buscar o user pelo email
        const user = await getByEmail(loginValidated.data.email);

        if(!user) {
            return res.status(400).json({
                error: "Email e/ou senha inválido(s)!"            
            })
        }

        //comparar a senha enviada com o hash armazenado
        const passIsValid = bcrypt.compareSync(loginValidated.data.password, user.password);

        if(!passIsValid) {
            return res.status(400).json({
                error: "E-mail ou senha inválido(s) (senhaaa)"
            })
        }

        const token = jwt.sign({name: user.name, publicID: user.public_id}, SECRET_KEY, { expiresIn: 60 * 5})

        console.log(token)
        return res.json({ token });
        
    } catch (error) {
        console.log(error);
    }    
};

export default login;