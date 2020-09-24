import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livingroom',
  templateUrl: './livingroom.component.html',
  styleUrls: ['./livingroom.component.css']
})
export class LivingroomComponent implements OnInit {
  public catagory: string; // property binding

  constructor() { }

  ngOnInit(): void {
    this.catagory = "living-room"; // property binding
  }

}
