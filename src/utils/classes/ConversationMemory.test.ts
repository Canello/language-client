import { ConversationMemory } from "./ConversationMemory";

describe("ConversationMemory class", () => {
    it("should keep a maximum of 16 messages, removing first message if limit is exceeded", async () => {
        const memory = new ConversationMemory();

        for (let i = 0; i <= 16; i++) {
            const message = {
                role: i % 2 === 0 ? "user" : "assistant",
                content: `Message ${i}`,
            };

            memory.push(message);
        }

        expect(memory.messages).toHaveLength(16);
        expect(memory.messages[0].content).toBe("Message 1"); // Message 0 should be removed and Message 1 should be the first item
        expect(memory.messages[memory.messages.length - 1].content).toBe(
            "Message 16"
        ); // Message 16 should be pushed as last item
    });
});
