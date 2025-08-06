import type { Category, Product } from "../src/type-alias";

describe("Type Alias", () => {
    it("should support in typescript", () => {
        const category: Category = {
            id: "1",
            name: "Phone",
        };

        const product: Product = {
            id: "1",
            name: "iPhone 15 Pro",
            price: 20000000,
            category: category,
        };

        console.info(category);
        console.info(product);
    });
});
