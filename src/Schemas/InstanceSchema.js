const InstanceBody = {
    type: 'object',
    required: ["name", "phone"],
    properties: {
        name: {
            type: "string"
        },
        phone: {
            type: "number"
        }
    }
}

export const InstanceSchema = {
    body: InstanceBody,
    
}