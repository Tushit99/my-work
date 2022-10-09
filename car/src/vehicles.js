import { set } from "mongoose"

// Function constructor
function FourWheeler(wheels, model, color, speed, fuel) {
    
    this.wheels = wheels ;
    this.model = model ; 
    
    this.color = color ; 
    this.speed = speed ;
    this.fuel = fuel ; 
}

FourWheeler.prototype.setSpeed = function (speed){
    this.speed = speed ;
}

FourWheeler.prototype.updateColor = function (color){
    this.color = color ;
}
FourWheeler.prototype.updateFuel = function (fuel){
    this.fuel = fuel ;
}



// Parent object fro Object.create
let FourWheelerObject = {
    wheels: "" ,
    speed: 0 ,
    color: "" ,
    fuel: 0 , 
    model: "" , 
    
    setSpeed : function (speed){
        this.speed= speed 
    },
    updateColor : function (color){
        this.color= color 
    },
    updateFuel : function (fuel){
        this.fuel= fuel 
    }
}

// Store function contructor object here
var car1 = new FourWheeler("wheels", "model", "color", 0, 0);


// Store Object.create here
var car2 = Object.create(FourWheelerObject);

export {car1, car2}  


