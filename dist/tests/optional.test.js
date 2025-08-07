describe("Optional Parameter", () => {
    it("should support null and undefined", () => {
        function sayHello(name) {
            if (name) {
                console.info(`Hello ${name}`);
            }
            else {
                console.info("Hello stranger");
            }
        }
        sayHello("Anggyar");
        const person = undefined;
        sayHello(person);
        sayHello(null);
    });
});
export {};
