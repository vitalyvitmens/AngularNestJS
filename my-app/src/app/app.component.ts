// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   title = 'my-app';
//   h1 = 'Angular + NestJS';
//   name = 'Star student';
//   footer = '2022 vitalyvitmens. All rights reserved.';
// }

//TODO: Class vs Method Variables (Класс против переменных метода)
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   title = 'my-app';
//   h1 = 'Angular + NestJS';
//   prefix = 'I am a ';
//   name = 'star student';
//   footer = '2022 vitalyvitmens. All rights reserved.';

//   speak() {
//     const sentence = this.prefix + this.name;
//     return sentence;
//   }
// }

// TODO: Iterating through String Arrays (Итерация по массивам строк)
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   title = 'my-app';
//   h1 = 'Angular + NestJS';
//   footer = '2022 vitalyvitmens. All rights reserved.';

//   colors: string[] = ['red', 'blue', 'green', 'purple'];
// }

// TODO: Iterating with Indices (Итерация с индексами)
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   title = 'my-app';
//   h1 = 'Angular + NestJS';
//   footer = '2022 vitalyvitmens. All rights reserved.';

//   fruits: string[] = ['apple', 'orange', 'pear', 'peach'];
// }

// TODO: Iterating through Custom Types (Перебор пользовательских типов)
// import { Component } from '@angular/core';
// import { Car } from './car';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   subaru: Car = { make: 'Subaru', model: 'Outback', miles: 58232 };
//   honda: Car = { make: 'Honda', model: 'Accord', miles: 39393 };
//   bmw: Car = { make: 'BMW', model: 'X3', miles: 4400 };
//   opel: Car = { make: 'Opel', model: 'Astra K', miles: 170000 };

//   cars: Car[] = [this.subaru, this.honda, this.bmw, this.opel];
// }

// TODO: Import Interface into a Service (Импорт интерфейса в сервис)
// import { Component } from '@angular/core';
// // here is where we import the car interface
// import { Car } from './car';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   title = 'my-app';
//   cars: String = '';
// }

// TODO: Recreating Car Array in a Service (Воссоздание массива автомобилей в сервисе)
// import { Component } from '@angular/core';
// // here is where we import the car interface
// import { TransportationService } from './transportation.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   // title = 'my-app';
//   // cars: String = '';
//   // car: String = '';
//   // make: String = '';
//   // model: String = '';
//   // miles: String = '';
// }

// TODO: Dependency Injection (Внедрение зависимости)
// import { Component } from '@angular/core';
// import { TransportationService } from './transportation.service';
// import { Car } from './car';
// import { Bike } from './bike';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   cars: Car[];
//   bikes: Bike[];

//   constructor(private transportationService: TransportationService) {
//     this.cars = this.transportationService.getCars();
//     this.bikes = this.transportationService.getBikes();
//   }
// }

// TODO: Event Binding (Привязка событий)
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   constructor() {}

//   saySomething() {
//     alert('                              GOOD DAY');
//   }
// }

// TODO: Making a Counter (Создание счетчика)
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   constructor() {}

//   counter = 0;

//   increment() {
//     this.counter++;
//   }
// }

// TODO: Event Updating a String (Событие, обновляющее строку)
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   constructor() {}

//   phrase = "Please:";

//   update() {
//     this.phrase += ' ...Fuck You!';
//   }
// }

// TODO: ngModel (Angular Модель)
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   constructor() {}

//   username: string='';
// }

// TODO: Sending Hard Coded Data to a Service (Отправка жестко закодированных данных в сервис)
// import { Component } from '@angular/core';
// import { TransportationService } from './transportation.service';
// import { Car } from './car';
// import { Bike } from './bike';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   cars: Car[];
//   bikes: Bike[];

//   constructor(private transportationService: TransportationService) {
//     this.cars = this.transportationService.getCars();
//     this.bikes = this.transportationService.getBikes();
//   }

//   addCar() {
//     const newCar: Car = { make: 'Tesla', model: 'Model X', miles: 100 };
//     this.transportationService.addCar(newCar);
//   }

//   addBike() {
//     const newBike: Bike = { make: 'Merida', model: 'Big.Nine 10-MD 19', miles: 0 };
//     this.transportationService.addBike(newBike);
//   }
// }

//TODO: Sending Dynamic Data to a Service (Отправка динамических данных в сервис)
import { Component } from '@angular/core';
import { TransportationService } from './transportation.service';
import { Car } from './car';
import { Bike } from './bike';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cars: Car[];
  bikes: Bike[];
  make: string = '';
  model: string = '';
  miles: number = 0;

  constructor(private transportationService: TransportationService) {
    this.cars = this.transportationService.getCars();
    this.bikes = this.transportationService.getBikes();
  }

  addCar() {
    const newCar: Car = {
      make: this.make,
      model: this.model,
      miles: this.miles,
    };
    this.transportationService.addCar(newCar);
  }

  addBike() {
    const newBike: Bike = {
      make: this.make,
      model: this.model,
      miles: this.miles,
    };
    this.transportationService.addBike(newBike);
  }
}

