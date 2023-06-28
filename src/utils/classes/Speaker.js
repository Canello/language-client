import EasySpeech from "easy-speech";

export class Speaker {
    constructor({ onSpeak, onStop }) {
        this.onSpeak = onSpeak ?? (() => {});
        this.onStop = onStop ?? (() => {});

        this.#setup();
    }

    async speak(text, options = {}) {
        this.onSpeak();

        await EasySpeech.speak({
            text,
            voice: this.#getVoice(),
            pitch: options.pitch ?? 1,
            rate: options.rate ?? 1,
            volume: options.volume ?? 1,
            boundary: (err) => {
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
            .catch((err) => console.error("Error initializing speaker."));
    }

    #getVoice() {
        return EasySpeech.voices().filter((voice) => voice.lang === "en-US")[0];
    }
}
