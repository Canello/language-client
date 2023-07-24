import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { FreeTestIsOverModal } from "./FreeTestIsOverModal.component";

jest.mock("react-dom", () => {
    return {
        ...jest.requireActual("react-dom"),
        createPortal: (el) => el,
    };
});
const mockOpenPayment = jest.fn(() => {});
jest.mock("../../../hooks/usePayment.hook", () => {
    return {
        usePayment: () => mockOpenPayment,
    };
});

describe("FreeTestIsOverModal", () => {
    it("should render without errors", async () => {
        render(<FreeTestIsOverModal />);

        const freeTestIsOverModalElement = screen.getByTestId(
            "FreeTestIsOverModalStyled"
        );
        expect(freeTestIsOverModalElement).toBeInTheDocument();
    });

    it("should try to open payment tab when BuyButton is clicked", async () => {
        render(<FreeTestIsOverModal />);

        const buyButtonElement = screen.getByText(/Comprar acesso/i);
        user.click(buyButtonElement);
        expect(mockOpenPayment).toHaveBeenCalledTimes(1);
    });
});
