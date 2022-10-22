class Vechle {
  constructor(t, r) {
    this.type = t;
    this.regNumber = r;
  }
}

class Car extends Vechle {
  constructor(t, r) {
    super(t, r);
  }
}

class Bike extends Vechle {
  constructor(t, r) {
    super(t, r);
  }
}

class Bus extends Vechle {
  constructor(t, r) {
    super(t, r);
  }
}

// let c1 = new Bike("Bike", "MH12 BT6723");
// console.log(c1);

class Slot {
  constructor(n, t) {
    this.number = n;
    this.type = t;
    this.isBooked = false;
  }
}

class ParkingFloor {
  constructor(floorNumber, maxSlots) {
    this.floorNumber = floorNumber;
    this.ParkingSpots = [];

    for (let i = 0; i < maxSlots; i++) {
      if (i === 0) {
        this.ParkingSpots.push(new Slot(i + 1, "Bus"));
      } else if (i === 1) {
        this.ParkingSpots.push(new Slot(i + 1, "Bike"));
      } else {
        this.ParkingSpots.push(new Slot(i + 1, "Car"));
      }
    }
  }
}

// let p1 = new ParkingFloor(1, 3);
// console.log(p1);

class ParkingArea {
  constructor(maxFloors) {
    this.floors = [];
    this.numberofFloors = maxFloors;

    for (let i = 0; i < maxFloors; i++) {
      this.floors[i] = new ParkingFloor(i + 1, 3);
    }
  }

  findSlot(type) {
    for (let i = 0; i < this.numberofFloors; i++) {
      for (let slot of this.floors[i].ParkingSpots) {
        if (slot.type === type && slot.isBooked === false) {
          return { floorNumber: i+1, found_sloot: slot };
        }
      }
    }
    return false ; 
  } 
  bookSloot(vehicle){
    let slot = this.findSlot(vehicle.type) 
    if(slot==false){
        console.log("all slots are full"); 
        return false ; 
    }   
  }
}

let p1 = new ParkingArea(3); 
let c3 = new Car("MH12 BT6723"); 

p1.bookSloot(c3); 


console.log(p1);  

