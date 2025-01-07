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
  idCount : number= 1;
  isUpdate :boolean = false;
  cars: Car[] =[

  ];
  saveCar(){
    if(!this.isUpdate){
      this.car.id = this.idCount;
      this.idCount++;
      this.cars.push(this.car);
      this.car = {} as Car;
    }
    this.car = {} as Car;
    this.isUpdate=false;

  }
  update(car:Car){
    this.car = car;
    this.isUpdate=true;
  }
  remove(car:Car){
    this.cars = this.cars.filter(c => c !=car);
  }
}
