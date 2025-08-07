describe("Function in typescript", () => {
    it("should supported in typescript", () => {
        const sayHello = (name) => {
            return `Hello ${name}`;
        };
        expect(sayHello("Anggyar")).toBe("Hello Anggyar");
        const printHello = (name) => {
            console.info(`Hello ${name}`);
        };
        printHello("Anggyar");
    });
    it("should support default value", () => {
        const sayHello = (name = "Guest") => {
            return `Hello ${name}`;
        };
        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello("Anggyar")).toBe("Hello Anggyar");
    });
    it("should support rest parameter", () => {
        const sum = (...values) => {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        };
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });
    it("should support optional parameter", () => {
        const sayHello = (firsName, lastName) => {
            return `Hello ${firsName} ${lastName ? lastName : ""}`;
        };
        expect(sayHello("Anggyar")).toBe("Hello Anggyar ");
        expect(sayHello("Anggyar", "Prabowo")).toBe("Hello Anggyar Prabowo");
    });
    it("should support function overloading", () => {
        function callMe(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value * 10;
            }
        }
        expect(callMe(10)).toBe(100);
        expect(callMe("Anggyar")).toBe("ANGGYAR");
    });
});
export {};
