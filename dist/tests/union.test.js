describe("Union", () => {
    it("should suppport Union in typescript", () => {
        let sample = "Anggyar Muhamad Yahya";
        console.info(sample);
        sample = 25;
        console.info(sample);
        sample = true;
        console.info(sample);
    });
    it("should support typeof in typescript", () => {
        function process(value) {
            if (typeof value === "number") {
                return value + 2;
            }
            else if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "boolean") {
                return !value;
            }
        }
        expect(process(10)).toBe(12);
        expect(process("hello")).toBe("HELLO");
        expect(process(true)).toBe(false);
    });
});
export {};
