import { sayHello } from "../src/say-hello";

describe("SayHello", () => {
    it("should return Hello Anggy", () => {
        expect(sayHello("Anggy")).toBe("Hello Anggy");
    });
});
