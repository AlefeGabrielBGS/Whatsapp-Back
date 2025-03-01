import Fastify from 'fastify'
import { connectDatabase } from './DatabaseConnector.js'
import * as dotenv from 'dotenv'
import routes from './src/routes.js'
import fastifyJwt from '@fastify/jwt';
dotenv.config();

const fastify = Fastify({
  logger: true
})

routes.forEach(route => {
  fastify.route(route)
})

await connectDatabase();

const myCustomMessages = {
  badRequestErrorMessage: 'Format is Authorization: Bearer token',
  noAuthorizationInHeaderMessage: 'Autorization header is missing!',
  authorizationTokenExpiredMessage: 'Authorization token expired',
}

fastify.register(fastifyJwt, {
  secret: process.env.JWT_SECRET_KEY,
  messages: myCustomMessages
});
// Run the server!
fastify.listen({ port: process.env.SERVER_PORT }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`Server is now listening on ${address}`)
})