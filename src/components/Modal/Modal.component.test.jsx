import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Modal } from "./Modal.component";

jest.mock("react-dom", () => {
    return {
        ...jest.requireActual("react-dom"),
        createPortal: (el) => el,
    };
});

describe("Modal", () => {
    it("should render without errors", async () => {
        render(
            <Modal isShowing={true} onClose={() => {}}>
                <div></div>
            </Modal>
        );

        const modalElement = screen.getByTestId("ModalStyled");
        expect(modalElement).toBeInTheDocument();
    });

    it("should close when the close icon is clicked", async () => {
        const spyOnClose = jest.fn(() => {});
        render(
            <Modal isShowing={true} onClose={spyOnClose}>
                <div></div>
            </Modal>
        );

        const closeIconElement = screen.getByRole("img");
        user.click(closeIconElement);
        expect(spyOnClose).toHaveBeenCalledTimes(1);
    });

    it("should close when the background is clicked", async () => {
        const spyOnClose = jest.fn(() => {});
        render(
            <Modal isShowing={true} onClose={spyOnClose}>
                <div></div>
            </Modal>
        );

        const backgroundElement = screen.getByTestId("ModalBackground");
        user.click(backgroundElement);
        expect(spyOnClose).toHaveBeenCalledTimes(1);
    });
});
