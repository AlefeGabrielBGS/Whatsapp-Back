const requestSignUp = {
    type: "object",
    required: [ "name","password","email"],
    properties: {
        email: {
            type: "string"     
        },
        password: {
            type: "string"
        },
        name: {
            type: "string"
        }
    }
}

export const SignUpSchema = {
    body: requestSignUp
}