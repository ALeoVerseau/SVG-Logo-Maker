const inquirer = require('inquirer')
const fs = require("fs")
const {Circle, Square, Triangle} = require("./lib/shapes.js")


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
        name:"shape",
        message:"Please choose from the three shapes",
        choices:["Circle", "Triangle", "Square"]
    },
    {
        type:"input",
        name:"shapeColor",
        message:"What color would you like for your shape?"
    }
])