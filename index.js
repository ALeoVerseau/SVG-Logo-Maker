const inquirer = require('inquirer')
const fs = require("fs")
const {Circle, Square, Triangle} = require("./lib/shapes.js")

// questions for SVG maker
inquirer.promt([
    {
        type:"maxLength-input",
        name:"text",
        message: "Please enter 3 letters you would like",
        maxLength: 3
    },
    {
        type:"input",
        name:"textColor",
        message: "What color would you like for your 3 letters? "
    },
    {
        type:"list",
        name:"shapeEl",
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
.then(({text, textColor, shapeEl, shapeColor}) => {
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
    }
})