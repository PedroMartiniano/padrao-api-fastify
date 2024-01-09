export class AppError {
    constructor(public readonly message: string = 'Algo deu errado.', public readonly statusCode: number = 400) {
        this.message = message
        this.statusCode = statusCode
    }
}