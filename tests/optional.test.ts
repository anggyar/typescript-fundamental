describe("Optional Parameter", () => {
    it("should support null and undefined", () => {
        function sayHello(name?: string | null) {
            if (name) {
                console.info(`Hello ${name}`);
            } else {
                console.info("Hello stranger");
            }
        }
        sayHello("Anggyar");
        const person: string | undefined = undefined;
        sayHello(person);
        sayHello(null);
    });
});
