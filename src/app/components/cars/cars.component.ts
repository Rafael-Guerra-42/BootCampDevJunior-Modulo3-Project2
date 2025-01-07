import { Component } from '@angular/core';
import {Car} from '../../Car'
@Component({
  selector: 'app-cars',
  standalone: false,
  
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  car: Car = {} as Car;
  idCount = 1
  cars: Car[] =[

  ];
  saveCar(){
    this.car.id = this.idCount;
    this.idCount++;
    this.cars.push(this.car)
    this.car = {} as Car;
  }
}
