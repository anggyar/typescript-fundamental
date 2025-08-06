describe("Array", () => {
    it("should be same as javascript Array", () => {
        const names: string[] = ["Anggyar", "Budi", "Christantyo"];
        const numbers: number[] = [1, 2, 3, 4, 5];

        console.info(names);
        console.info(numbers);
    });

    it("should suppor readonly Array", () => {
        const hobbies: ReadonlyArray<string> = ["Coding", "Gaming", "Reading"];
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);

        // hobbies[0] = "Cooking"; //!No use, because ReadonlyArray cannot be modified
    });

    it("should support tupple", () => {
        const person: readonly [string, string, number] = [
            "Anggyar",
            "Muhamad",
            25,
        ];

        console.info(person);

        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
    });
});
