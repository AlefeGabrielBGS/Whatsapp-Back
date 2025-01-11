import Fastify from 'fastify'
import { connectDatabase } from './DatabaseConnector.js'
import * as dotenv from 'dotenv'
import routes from './src/routes.js'
dotenv.config();

const fastify = Fastify({
  logger: true
})

routes.forEach(route => {
  fastify.route(route)
})

await connectDatabase();

// Run the server!
fastify.listen({ port: process.env.SERVER_PORT }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`Server is now listening on ${address}`)
})