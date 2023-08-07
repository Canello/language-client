import { ensureTwoDigits, formatDate } from "./formatDate";

describe("formatDate function", () => {
    describe("ensureTwoDigits", () => {
        it("should add 0 in front of number if it has only one digit, and do nothing if it has two digits already", async () => {
            const numbers = [1, "2", 20, "10"];
            const targets = ["01", "02", "20", "10"];
            const results = [];

            for (let number of numbers) {
                results.push(ensureTwoDigits(number));
            }

            for (let i in results) {
                expect(results[i]).toEqual(targets[i]);
            }
        });
    });

    describe("formatDate", () => {
        it("should return a formatted date", async () => {
            const dateStrings = [
                "2023-08-07T14:45:33.901Z",
                "2023-10-17T14:45:33.901Z",
                "2023-01-17T14:45:33.901Z",
            ];

            const targets = ["07/08/2023", "17/10/2023", "17/01/2023"];

            const results = [];

            for (let dateString of dateStrings) {
                results.push(formatDate(dateString));
            }

            for (let i in results) {
                expect(results[i]).toEqual(targets[i]);
            }
        });
    });
});
