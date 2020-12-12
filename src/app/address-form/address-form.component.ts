import { Component, Input, OnInit } from '@angular/core';
import { Address } from '../model/address';
import { Task } from '../model/task';

@Component({
  selector: 'weddplan-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {

  @Input() task: Task;

  street: string;
  houseNum: string;
  city: string;
  postalCode: string;


  constructor() { }

  ngOnInit(): void {
    this.street = this.task.street;
    this.houseNum = this.task.houseNum;
    this.city = this.task.city;
    this.postalCode = this.task.postalCode;
  }

  send(): void {
    this.task.street = this.street;
    this.task.houseNum = this.houseNum;
    this.task.city = this.city;
    this.task.postalCode = this.postalCode;
  }

}
