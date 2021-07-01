class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    
}

let circle = new Circle(2, "mau vang");
let radius = circle.getRadius();
let area = circle.getArea();
alert("radius: " + radius + ", area: " + area);


