import AuthController from './Controllers/AuthController.js'

const routes = [
  {
    method: 'POST',
    path: '/auth/signup',
    handler: AuthController
  }
]

export default routes