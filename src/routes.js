import { Register, GetUserbyID, DeleteUserbyid, UptadeUserbyID, Login } from "./Controllers/AuthController.js"
import { JWTVerifyMiddlewares } from "./Controllers/Middlewares/JWTVerifyMiddlewares.js"
import { InstanceSchema } from "./Schemas/InstanceSchema.js"
import { LoginSchema } from "./Schemas/LoginSchema.js"
import { SignUpSchema } from "./Schemas/SignUpSchema.js"

const routes = [
  {
    method: 'POST',
    path: '/auth/signup',
    schema: SignUpSchema,
    handler: Register
  },
  // {
  //   method: 'POST',
  //   path: '/auth/login',
  //   schema: LoginSchema,
  //   handler: Login
  // },
  {
    method: 'POST',
    url: '/my/instances',
    schema: InstanceSchema,
    onRequest: JWTVerifyMiddlewares,
    handler: Login
  }
]


export default routes