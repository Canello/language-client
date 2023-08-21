export class CustomError extends Error {
    type: string;
    message: string;

    constructor({ type, message }: { type: string; message: string }) {
        super();
        this.type = type;
        this.message = message;
    }
}
