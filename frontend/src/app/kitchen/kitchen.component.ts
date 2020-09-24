import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {
  public catagory: string; // property binding

  constructor() { }

  ngOnInit(): void {
    this.catagory = "kitchen"; // property binding
  }

}
