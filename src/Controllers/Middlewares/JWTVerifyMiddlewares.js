export async function JWTVerifyMiddlewares(request, reply) {
    try {
        await request.jwtVerify()
    } catch (error) {
        reply.send(error)
    }
}