describe("Object", () => {
    it("should support in typescript", () => {
        const person: { id: string; name: string; hobbies?: string[] } = {
            id: "1",
            name: "Anggyar Muhamad Yahya",
        };

        console.info(person);

        person.name = "Anggyar";
        person.id = "2";

        console.info(person);
    });
});
