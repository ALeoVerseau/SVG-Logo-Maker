const {Circle, Square, Triangle} = require("./shapes")

describe("Circle", () => {
    it("renders correctly", () => {
        const shape = new Circle();
        let color = ("green")
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="150" cy="120" r="80" fill="${this.color}"/>`)
    });
});
describe("Square", () => {
    it("renders correctly", () => {
        const shape = new Square();
        let color = ("green")
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${this.color}"/>`)
    });
});
describe("Triangle", () => {
    it("renders correctly", () => {
        const shape = new Triangle();
        let color = ("green")
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="50, 25 25, 125 125, 150" fill="${this.color}"s/>`)
    });
});