export class ConversationMemory {
    #messagesLimit = 20;

    constructor() {
        this.messages = [];
    }

    push({ role, content }) {
        if (this.messages.length >= this.#messagesLimit) this.messages.shift();
        this.messages.push({ role, content });
    }
}
