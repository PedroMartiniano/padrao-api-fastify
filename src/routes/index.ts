import { FastifyInstance } from "fastify";

export const routes = async (app: FastifyInstance) => {

    app.get('/', async (req, rep) => {
        return { hello: 'world' }
    })
    
}