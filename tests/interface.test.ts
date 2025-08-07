import type { Seller } from "../src/seller";

describe("interface", () => {
    it("should supported in typescript", () => {
        const seller: Seller = {
            id: 1,
            name: "Anggyar Muhamad Yahya",
            nib: "1234567890",
            npwp: "0987654321",
        };

        seller.name = "Toko Jadi Ria";
        // seller.nib = "0987654321"; // This line would cause an error because nib is readonly
    });

    it("should support function interface", () => {
        interface AddFunction {
            (value1: number, value2: number): number;
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        };

        expect(add(1, 2)).toBe(3);
    });

    it("should support indexable interface", () => {
        interface StringArray {
            [index: number]: string;
        }

        const myArray: StringArray = ["Anggya", "Budi", "Christantyo"];
        console.info(myArray);
    });

    it("should suppport indexable interface for non number index", () => {
        interface StringDictionary {
            [key: string]: string;
        }

        const myDictionary: StringDictionary = {
            name: "Anggyar",
            hobby: "Coding",
            city: "Jakarta",
        };

        expect(myDictionary["name"]).toBe("Anggyar");
        expect(myDictionary["hobby"]).toBe("Coding");
        expect(myDictionary["city"]).toBe("Jakarta");
    });
});
