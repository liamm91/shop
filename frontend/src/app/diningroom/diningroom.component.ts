import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diningroom',
  templateUrl: './diningroom.component.html',
  styleUrls: ['./diningroom.component.css']
})
export class DiningroomComponent implements OnInit {
  public catagory: string; // property binding

  constructor() { }

  ngOnInit(): void {
    this.catagory = "dining-room"; // property binding
  }

}
