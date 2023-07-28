import { Speaker } from "./Speaker";

jest.mock("easy-speech", () => {
    return {
        init: () => new Promise((resolve) => resolve()),
        speak: () => new Promise((resolve) => resolve()),
        cancel: () => "ratoo",
        voices: () => [{}],
    };
});

describe("Speak class", () => {
    it("should call onSpeak before start speaking and onStop after finishing", async () => {
        const spyOnSpeak = jest.fn(() => {});
        const spyOnStop = jest.fn(() => {});
        const speaker = new Speaker({ onSpeak: spyOnSpeak, onStop: spyOnStop });

        await speaker.speak();
        expect(spyOnSpeak).toHaveBeenCalledTimes(1);
        expect(spyOnStop).toBeCalledTimes(1);
    });

    it("should call onStop when speaking is stopped", async () => {
        const spyOnStop = jest.fn(() => {});
        const speaker = new Speaker({ onStop: spyOnStop });

        speaker.stop();
        expect(spyOnStop).toHaveBeenCalledTimes(1);
    });

    it("should not throw an error if onSpeak or onStop are not received", async () => {
        const speakers = [
            new Speaker(),
            new Speaker({ onSpeak: () => {} }),
            new Speaker({ onStop: () => {} }),
        ];

        for (let speaker of speakers) {
            speaker.speak();
            speaker.stop();
        }
    });
});
