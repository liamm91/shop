import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decorative',
  templateUrl: './decorative.component.html',
  styleUrls: ['./decorative.component.css']
})
export class DecorativeComponent implements OnInit {
  public catagory: string; // property binding

  constructor() { }

  ngOnInit(): void {
    this.catagory = "decorative"; // property binding
  }

}
