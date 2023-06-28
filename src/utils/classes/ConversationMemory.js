export class ConversationMemory {
    #messagesLimit = 16;

    constructor() {
        this.messages = [];
    }

    push({ role, content }) {
        if (this.messages.length >= this.#messagesLimit) this.messages.shift();
        this.messages.push({ role, content });
    }
}
