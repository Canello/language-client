import { render, screen } from "@testing-library/react";
import { ChatBox } from "./ChatBox.component";

describe("ChatBox", () => {
    it("should render without errors", async () => {
        render(
            <ChatBox label="Something" isLoading={false} isActive={false}>
                Some text
            </ChatBox>
        );

        const chatBoxElement = screen.getByTestId("ChatBoxStyled");
        expect(chatBoxElement).toBeInTheDocument();
    });

    it("should display loader if isLoading equals true", async () => {
        render(
            <ChatBox label="Something" isLoading={true} isActive={false}>
                Some text
            </ChatBox>
        );

        const loadingElement = screen.getByTestId("LoadingStyled");
        expect(loadingElement).toBeInTheDocument();
    });

    it("should not display loader if isLoading is not true", async () => {
        render(
            <ChatBox label="Something" isLoading={false} isActive={false}>
                Some text
            </ChatBox>
        );

        const loadingElement = screen.queryByTestId("LoadingStyled");
        expect(loadingElement).toBeNull();
    });
});
