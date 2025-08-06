describe("An", () => {
    it("should support Any in typescript", () => {
        const person = {
            id: 1,
            name: "Anggyar Muhamad Yahya",
            age: 25,
            isActive: true,
        };
        person.age = 27;
        person.address = "Jl. Raya No. 1";
        console.info(person);
    });
});
export {};
