interface RecorderArgs {
    onRecord?: Function;
    onStop?: Function;
    onDecline?: Function;
}

export class Recorder {
    #mediaRecorder: MediaRecorder | null;
    #stream: MediaStream | null;
    onRecord: Function;
    onStop: Function;
    onDecline: Function;

    constructor({ onRecord, onStop, onDecline }: RecorderArgs = {}) {
        this.onRecord = onRecord ?? (() => {});
        this.onStop = onStop ?? (() => {});
        this.onDecline = onDecline ?? (() => {});

        this.#stream = null;
        this.#mediaRecorder = null;
    }

    async record() {
        await this.#setStream();
        if (!this.#stream) return;
        this.#mediaRecorder = this.#getMediaRecorder(this.#stream);
        this.#mediaRecorder.start();
        this.onRecord();
    }

    stop() {
        if (!this.#mediaRecorder) return;
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

    #getMediaRecorder(stream: MediaStream) {
        const mediaRecorder = new MediaRecorder(stream);
        const audioChunks: Array<BlobPart> = [];

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
