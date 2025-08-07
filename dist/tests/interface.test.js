describe("interface", () => {
    it("should supported in typescript", () => {
        const seller = {
            id: 1,
            name: "Anggyar Muhamad Yahya",
            nib: "1234567890",
            npwp: "0987654321",
        };
        seller.name = "Toko Jadi Ria";
        // seller.nib = "0987654321"; // This line would cause an error because nib is readonly
    });
    it("should support function interface", () => {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(1, 2)).toBe(3);
    });
    it("should support indexable interface", () => {
        const myArray = ["Anggya", "Budi", "Christantyo"];
        console.info(myArray);
    });
    it("should suppport indexable interface for non number index", () => {
        const myDictionary = {
            name: "Anggyar",
            hobby: "Coding",
            city: "Jakarta",
        };
        expect(myDictionary["name"]).toBe("Anggyar");
        expect(myDictionary["hobby"]).toBe("Coding");
        expect(myDictionary["city"]).toBe("Jakarta");
    });
    it("should support extends interface", () => {
        const employee = {
            id: "1",
            name: "Anggyar Muhamad Yahya",
            division: "Engineering",
        };
        const manager = {
            id: "2",
            name: "Budi Santoso",
            division: "Engineering",
            numberOfSubordinates: 5,
        };
        console.info(employee);
        console.info(manager);
    });
    it("should support function in interface", () => {
        const person = {
            name: "Anggyar Muhamad Yahya",
            sayHello(name) {
                return `Hello ${name}, my name is ${this.name}`;
            },
        };
        console.info(person.sayHello("Budi"));
    });
    it("Should support intersection in interface", () => {
        const person = {
            name: "Anggyar Muhamad Yahya",
            number: "1234567890",
        };
        console.info(person);
    });
    it("should support type assertion", () => {
        const person = {
            name: "Anggyar Muhamad Yahya",
            age: 30,
        };
        const person2 = person;
        console.info(person2);
    });
});
export {};
