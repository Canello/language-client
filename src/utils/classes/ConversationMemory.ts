export class ConversationMemory {
    #messagesLimit = 16;
    messages: Array<Message>;

    constructor() {
        this.messages = [];
    }

    push(message: Message) {
        if (this.messages.length >= this.#messagesLimit) this.messages.shift();
        this.messages.push(message);
    }
}
