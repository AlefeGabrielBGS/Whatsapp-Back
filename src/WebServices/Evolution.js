import axios from 'axios'
import * as dotenv from 'dotenv'

const headers = {
    headers: {
        'apiKey': process.env.EVOLUTION_API_KEY="980062daaf8e299748446f6aafbfd3e6"
    }
}

async function CreateInstance(instancedata) {
    try {
        const request = await axios.post(`${process.env.EVOLUTION_URL}instance/create`, instancedata, headers) 
        return request.data
    } catch (error) {
        console.error(error)
    }
}    