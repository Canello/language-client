// @ts-ignore
import EasySpeech from "easy-speech";

interface SpeakerArgs {
    onSpeak?: Function;
    onStop?: Function;
}

interface SpeakOptions {
    pitch?: number;
    rate?: number;
    volume?: number;
}

export class Speaker {
    onSpeak: Function;
    onStop: Function;

    constructor({ onSpeak, onStop }: SpeakerArgs = {}) {
        this.onSpeak = onSpeak ?? (() => {});
        this.onStop = onStop ?? (() => {});

        this.#setup();
    }

    async speak(text: string, options: SpeakOptions = {}) {
        this.onSpeak();

        await EasySpeech.speak({
            text,
            voice: this.#getVoice(),
            pitch: options.pitch ?? 1,
            rate: options.rate ?? 1,
            volume: options.volume ?? 1,
            boundary: (err: any) => {
                console.log("Speaker boundary reached.");
                this.onStop();
            },
        }).catch(() => {}); // catch to avoid displaying error when canceling the speaking

        this.onStop();
    }

    stop() {
        this.onStop();
        EasySpeech.cancel();
    }

    async #setup() {
        await EasySpeech.init({ maxTimeout: 5000, interval: 250 })
            .then(() => console.log("Speaker correctly initialized."))
            .catch((err: any) => console.error("Error initializing speaker."));
    }

    #getVoice() {
        return EasySpeech.voices().filter(
            (voice: any) => voice.lang === "en-US"
        )[0];
    }
}
