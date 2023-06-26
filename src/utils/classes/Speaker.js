class Speaker {
    constructor() {
        this.voice = new Voice().voice;
    }
}

class Voice {
    constructor() {
        this.voices = [];
        this._loadVoices();
    }

    get voice() {
        return this.voices[0];
    }

    _loadVoices() {
        const load = () => {
            this.voices = speechSynthesis
                .getVoices()
                .filter((voice) => voice.lang.startsWith("en-US"));
        };
        load();
        speechSynthesis.onvoiceschanged = load;
    }
}
