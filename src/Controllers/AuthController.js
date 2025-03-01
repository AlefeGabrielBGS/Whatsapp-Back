import isEmail from "validator/lib/isEmail.js";
import { SignUp, FindUserbyID, deleteduserbyid, uptadeuserbyid, LoginUser } from "../Services/UsersServices.js";

export async function Register (req, res){
      const {email} = req.body
      if (!isEmail(email)) {
      return res.status(400).send({
        message:'Email inválido!'
      })

    }
      const JwtToken = await SignUp (req, res)
      return res.status(200).send({
        message:'Usuário criado com sucesso!',
        data: JwtToken
      })

    }
    export async function Login(req, res) {
      const {email} = req.body
      if (!isEmail(email)) {
      return res.status(400).send({
        message:'Email inválido!'
      })
    }
      const Token = await LoginUser(req, res)
      return res.status(Token ? 200:400).send({
        message: Token ? `OK` : `Erro`,
        data: Token
      })
  }

    export async function GetUserbyID(req, res) {
      const user = await FindUserbyID(req.params.userid)
      return res.status(user ? 200:400 ).send({
        message: user ? `Usuário Encontrado`: `Usuário não encontrado`,
        data: user,
      })
    
    }
    export async function DeleteUserbyid(req, res) {
      const deletedUser = await deleteduserbyid(req.params.userid)
      return res.status(deletedUser.deletedCount ? 200:400).send({
        message: deletedUser.deletedCount ? "Usuário deletado": 'Usuário não encontrado',
        data: deletedUser
      })
    }
    export async function UptadeUserbyID (req, res) {
      const user = await uptadeuserbyid(req.params.userid, req.body)
      return res.status(200).send ({
        message: "usuário atualizado",
        data: user
      })

    }
