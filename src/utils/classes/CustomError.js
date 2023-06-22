export class CustomError extends Error {
    constructor({ type, message }) {
        super();
        this.type = type;
        this.message = message;
    }
}
