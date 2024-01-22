class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    const perimeter = this.sides * this.sideLength;
    console.log(`Perimeter of ${this.name} is: ${perimeter}`);
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super('square', 4, sideLength);
  }

  calcArea() {
    const area = this.sideLength * this.sideLength;
    console.log(`Area of square is: ${area}`);
  }
}

class Triple {
  static customName = "Tripler";
  static description = "I triple any number you provide";

  static calculate(n = 1) {
    return n * 3;
  }
}

class SquaredTriple extends Triple {
  static description = "I square the triple of any number you provide";
  static longDescription;

  static calculate(n) {
    return super.calculate(n) ** 2;
  }
}

// Example tests

// Shape class
const squareShape = new Shape('square', 4, 5);
squareShape.calcPerimeter(); 

const triangleShape = new Shape('triangle', 3, 3);
triangleShape.calcPerimeter(); 

// Square class
const square = new Square(5);
square.calcPerimeter(); 
square.calcArea(); 

// Triple class
console.log(Triple.description);
console.log(Triple.calculate()); 
console.log(Triple.calculate(6)); 

// SquaredTriple class
console.log(SquaredTriple.calculate(3)); 
console.log(SquaredTriple.description); 
console.log(SquaredTriple.longDescription); 
console.log(SquaredTriple.customName); 
