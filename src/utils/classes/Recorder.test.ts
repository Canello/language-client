import { Recorder } from "./Recorder";

global.MediaRecorder = class MediaRecorder {
    toCallOnStop: Function;

    constructor() {
        this.toCallOnStop = () => {};
    }

    start() {}

    stop() {
        this.toCallOnStop();
    }

    addEventListener(listenTo: any, func: Function) {
        this.toCallOnStop = func;
    }
} as any;

const makeNavigator = (isError = false) => {
    if (isError) {
        global.navigator = {
            mediaDevices: {
                getUserMedia: () => {
                    throw new Error("Declined audio permission.");
                },
            },
        } as any;
    } else {
        global.navigator = {
            mediaDevices: {
                getUserMedia: () => {
                    return {
                        getTracks: () => [{ stop: () => {} }],
                    };
                },
            },
        } as any;
    }
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
        expect(spyOnStop).toHaveBeenCalledTimes(1);
    });

    it("should call onDecline if user declines audio permission", async () => {
        const spyOnDecline = jest.fn(() => {});
        const recorder = new Recorder({ onDecline: spyOnDecline });
        recorder.record();

        expect(spyOnDecline).toHaveBeenCalledTimes(1);
    });

    it("should not throw an error if any callback function is missing", async () => {
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

    it("should not throw an error if the argument object is missing", async () => {
        const recorder = new Recorder();

        makeNavigator();
        await recorder.record(); // must start before stopping
        recorder.stop();
        makeNavigator(true);
        await recorder.record();
    });
});
