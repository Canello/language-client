import "@testing-library/jest-dom";

jest.mock("./utils/functions/track");

beforeEach(() => {
    jest.restoreAllMocks();
});
