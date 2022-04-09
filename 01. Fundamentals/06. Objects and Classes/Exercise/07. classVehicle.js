 
 
  class Vehicle {
    constructor( type, model, parts, fuel, ){
      this.type = type;
      this.model = model;
      this.parts = parts; // parts is object
      this.fuel = fuel;
      this.parts.quality = this.parts.engine * this.parts.power;
    }
    
    drive (fuelLoss){
     this.fuel -= fuelLoss; 
    }
}
