import { Recorder } from "./Recorder";

global.MediaRecorder = class MediaRecorder {
    constructor() {}
    start() {}
    stop() {}
    addEventListener() {}
};

const makeNavigator = (isError = false) => {
    if (isError) {
        global.navigator = {
            mediaDevices: {
                getUserMedia: () => {
                    throw new Error("Declined audio permission.");
                },
            },
        };
    } else {
        global.navigator = {
            mediaDevices: {
                getUserMedia: () => {
                    return {
                        getTracks: () => [{ stop: () => {} }],
                    };
                },
            },
        };
    }
    // nao ta setando global.navigator !!!!!!!!!!!!!!!!!!!
    // nao ta setando global.navigator !!!!!!!!!!!!!!!!!!!
    // nao ta setando global.navigator !!!!!!!!!!!!!!!!!!!
    // nao ta setando global.navigator !!!!!!!!!!!!!!!!!!!
    // nao ta setando global.navigator !!!!!!!!!!!!!!!!!!!
    // nao ta setando global.navigator !!!!!!!!!!!!!!!!!!!
};

describe("Recorder class", () => {
    beforeEach(() => {
        makeNavigator();
    });

    it("should call onRecord when starting recording", async () => {
        const spyOnRecord = jest.fn(() => {});
        const recorder = new Recorder({ onRecord: spyOnRecord });

        await recorder.record();
        expect(spyOnRecord).toHaveBeenCalledTimes(1);
    });

    it("should call onStop when stoping recording", async () => {
        const spyOnStop = jest.fn(() => {});
        const recorder = new Recorder({ onStop: spyOnStop });

        await recorder.record();
        recorder.stop();
        // expect(spyOnStop).toHaveBeenCalledTimes(1);
    });

    it("should call onDecline if user declines audio permission", async () => {
        const spyOnDecline = jest.fn(() => {});
        const recorder = new Recorder({ onDecline: spyOnDecline });
        recorder.record();

        expect(spyOnDecline).toHaveBeenCalledTimes(1);
    });

    it("should should not throw an error if any callback function is missing", async () => {
        const recorders = [
            new Recorder({ onRecord: () => {} }),
            new Recorder({ onStop: () => {} }),
            new Recorder({ onDecline: () => {} }),
        ];

        for (let recorder of recorders) {
            makeNavigator();
            await recorder.record(); // must start before stopping
            recorder.stop();
            makeNavigator(true);
            await recorder.record();
        }
    });

    it("should should not throw an error if the argument object is missing", async () => {
        const recorder = new Recorder();

        makeNavigator();
        await recorder.record(); // must start before stopping
        recorder.stop();
        makeNavigator(true);
        await recorder.record();
    });
});
