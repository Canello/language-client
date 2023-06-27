export class Recorder {
    #mediaRecorder;
    #stream;

    constructor({ onRecord, onStop, onDecline }) {
        this.onRecord = onRecord ?? (() => {});
        this.onStop = onStop ?? (() => {});
        this.onDecline = onDecline ?? (() => {});

        this.#stream = null;
        this.#mediaRecorder = null;
    }

    async record() {
        await this.#setStream();
        this.#mediaRecorder = this.#getMediaRecorder(this.#stream);
        this.#mediaRecorder.start();
        this.onRecord();
    }

    stop() {
        this.#mediaRecorder.stop();
        this.#mediaRecorder = null;
        this.#cancelStream();
    }

    async #setStream() {
        try {
            this.#stream = await navigator.mediaDevices.getUserMedia({
                audio: true,
            });
        } catch (err) {
            this.onDecline();
        }
    }

    #cancelStream() {
        if (this.#stream)
            this.#stream.getTracks().forEach((track) => track.stop());
        this.#stream = null;
    }

    #getMediaRecorder(stream) {
        const mediaRecorder = new MediaRecorder(stream);
        const audioChunks = [];

        mediaRecorder.addEventListener("dataavailable", (event) => {
            audioChunks.push(event.data);
        });

        mediaRecorder.addEventListener("stop", async () => {
            const audioBlob = new Blob(audioChunks);
            this.onStop(audioBlob);
        });

        return mediaRecorder;
    }
}
