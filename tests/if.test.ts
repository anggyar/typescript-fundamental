describe("IF statement", () => {
    it("should support in typescript", () => {
        const examValue = 90;

        if (examValue > 80) {
            console.info("Good Job");
        } else if (examValue > 70) {
            console.info("Not Bad");
        } else {
            console.info("Try Again");
        }
    });

    it("should support ternary operator", () => {
        const value = 80;
        const say = value >= 75 ? "Congratulation" : "Try Again";
        console.info(say);
    });

    it("should support switch statement", () => {
        const sayHello = (name: string): string => {
            switch (name) {
                case "Eko":
                    return "Hi Eko";
                case "Budi":
                    return "Hi Budi";
                default:
                    return "Hi Guest";
            }
        };

        console.info(sayHello("Eko"));
        console.info(sayHello("Budi"));
        console.info(sayHello("Anggyar"));
    });
});
