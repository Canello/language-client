import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import { AudioButton } from "./AudioButton.component";

jest.mock("./BlinkingDot.component", () => {
    return {
        BlinkingDot: () => <div data-testid="BlinkingDotMock"></div>,
    };
});

describe("AudioButton", () => {
    it("should render BlinkingDot when it is recording", () => {
        render(
            <AudioButton
                isRecording={true}
                startRecording={() => {}}
                stopRecording={() => {}}
            />
        );

        const blinkingDot = screen.getByTestId("BlinkingDotMock");

        expect(blinkingDot).toBeInTheDocument();
    });

    it("should not render BlinkingDot when it is not recording", () => {
        render(
            <AudioButton
                isRecording={false}
                startRecording={() => {}}
                stopRecording={() => {}}
            />
        );

        const blinkingDot = screen.queryByTestId("BlinkingDotMock");

        expect(blinkingDot).toBeNull();
    });

    it("should start recording if it is not recording already", () => {
        const spyStartRecording = jest.fn(() => {});

        render(
            <AudioButton
                isRecording={false}
                startRecording={spyStartRecording}
                stopRecording={() => {}}
            />
        );

        const audioButton = screen.getByRole("button");
        user.click(audioButton);

        expect(spyStartRecording).toHaveBeenCalledTimes(1);
    });

    it("should stop recording if it is recording already", () => {
        const spyStopRecording = jest.fn(() => {});

        render(
            <AudioButton
                isRecording={true}
                startRecording={() => {}}
                stopRecording={spyStopRecording}
            />
        );

        const audioButton = screen.getByRole("button");
        user.click(audioButton);

        expect(spyStopRecording).toHaveBeenCalledTimes(1);
    });
});
