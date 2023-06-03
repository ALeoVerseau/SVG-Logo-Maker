const inquirer = require('inquirer')
const fs = require("fs")
const {Circle, Square, Triangle} = require("./lib/shapes.js")

class SVG {
    constructor() {
        this.shape=""
        this.text=""
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg version="1.1" width="300" height="200">${this.shape} ${this.text} </svg>` 
    }
    setText(text, textColor) {
        this.text= `<text x="150 y="115" font-size="60" text-anchor="middle" fill="${textColor}"> ${text} </text>`
    }
    setShape(shape) {
        this.shape= shape.render()
    }
}

// questions for SVG maker
inquirer.promt([
    {
        type:"input",
        name:"text",
        message: "Please enter 3 letters you would like",
    },
    {
        type:"input",
        name:"textColor",
        message: "What color would you like for your 3 letters? "
    },
    {
        type:"list",
        name:"shape",
        message:"Please choose from the three shapes",
        choices:["Circle", "Square", "Triangle"]
    },
    {
        type:"input",
        name:"shapeColor",
        message:"What color would you like for your shape?"
    }
])
//takes responses from above and creates it
.then(({text, textColor, shape, shapeColor}) => {
    switch (shape) {
        case "Circle":
            shape = new Circle();
            shape.setColor(shapeColor);
            break;
        case "Square":
            shape = new Square();
            shape.setColor(shapeColor);
            break;
        case "Triangle":
            shape = new Triangle();
            shape.setColor(shapeColor);
            break;
        default:
            console.log("Please select a shape");
            return;
    }
    const newSVG = new SVG()
    newSVG.setShape(shape)
    newSVG.setText(text, textColor)
    return fs.writeFileSync("logo.svg", svg.render())
})


