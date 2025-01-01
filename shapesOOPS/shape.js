  //In languages with true abstract methods, you can define a method within a class but leave its implementation details empty.
   //This method signature acts as a blueprint, 
   //forcing subclasses to define their own implementation for that method.
class Shape {
  constructor(colour){
    this.colour = colour;
  }
 getArea(){
  throw new Error("getArea function doesn't execute in Shape class");
 }
  setColor(shapecolour){
   this.colour = shapecolour;
  }
}


class Circle extends Shape{
  constructor(colour,radius){
    super(colour);
    this.radius= radius;
  }
  getArea(){
    // super.getArea();
    if (this.radius<=10){
         throw new Error ("radius cannot be a negative value");
    }
    else{
      return Math.PI + this.radius * this.radius;
    }
  }
}

class Rectangle extends Shape{
  constructor(colour,length,breadth){
    super(colour);
    this.length= length;
    this.breadth= breadth;
  }
  getArea(){ 
    // super.getArea();    we don't need to use this becasue we already have thrown this function error in the 
                           //the parent class
     return this.length * this.breadth;
  }
}