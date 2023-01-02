import { Injectable } from '@angular/core';
import { Car } from './car';
import { Bike } from './bike';

@Injectable({
  providedIn: 'root',
})
export class TransportationService {
  constructor() {}

  subaru: Car = { make: 'Subaru', model: 'Outback', miles: 58232 };
  honda: Car = { make: 'Honda', model: 'Accord', miles: 39393 };
  bmw: Car = { make: 'BMW', model: 'X3', miles: 4400 };

  cars: Car[] = [this.subaru, this.honda, this.bmw];

  getCars() {
    return this.cars;
  }

  addCar(car: Car) {
    this.cars.push(car);
  }

  stels: Bike = { make: 'Stels', model: '620MD', miles: 270 };
  gt: Bike = { make: 'GT', model: 'XRS77', miles: 57 };
  aist: Bike = { make: 'AIST', model: 'A220R', miles: 0 };

  bikes: Bike[] = [this.stels, this.gt, this.aist];

  getBikes() {
    return this.bikes;
  }

  addBike(bike: Bike) {
    this.bikes.push(bike);
  }

}
