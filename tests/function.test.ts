describe("Function in typescript", () => {
    it("should supported in typescript", () => {
        const sayHello = (name: string): string => {
            return `Hello ${name}`;
        };

        expect(sayHello("Anggyar")).toBe("Hello Anggyar");

        const printHello = (name: string): void => {
            console.info(`Hello ${name}`);
        };

        printHello("Anggyar");
    });

    it("should support default value", () => {
        const sayHello = (name: string = "Guest"): string => {
            return `Hello ${name}`;
        };

        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello("Anggyar")).toBe("Hello Anggyar");
    });

    it("should support rest parameter", () => {
        const sum = (...values: number[]): number => {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        };

        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });

    it("should support optional parameter", () => {
        const sayHello = (firsName: string, lastName?: string): string => {
            return `Hello ${firsName} ${lastName ? lastName : ""}`;
        };

        expect(sayHello("Anggyar")).toBe("Hello Anggyar ");
        expect(sayHello("Anggyar", "Prabowo")).toBe("Hello Anggyar Prabowo");
    });

    it("should support function overloading", () => {
        function callMe(value: number): number;
        function callMe(value: string): string;
        function callMe(value: any): any {
            if (typeof value === "string") {
                return value.toUpperCase();
            } else if (typeof value === "number") {
                return value * 10;
            }
        }

        expect(callMe(10)).toBe(100);
        expect(callMe("Anggyar")).toBe("ANGGYAR");
    });
});
