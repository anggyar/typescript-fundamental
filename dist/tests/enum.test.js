import { CustomerType } from "../src/enum";
describe("enum", () => {
    it("should work in typescript", () => {
        const customer = {
            id: 1,
            name: "Anggyar Muhamad Yahya",
            type: CustomerType.PLATINUM,
        };
        console.info(customer);
    });
});
