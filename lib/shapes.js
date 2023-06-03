class Shape{
    constructor(color){
        this.color=""
    }
    setColor(color){
        this.color=(color);
    }
}

class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="120" r="80" fill="${this.color}" />`
    }
}
class Square extends Shape{
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.color}" />`
    }
}
class Triangle extends Shape{
    render(){
        return `<polygon height="100%" width="100%" points="50, 25 25, 125 125, 150" fill="${this.color}" />`
    }
};

module.exports = {Circle, Square, Triangle}