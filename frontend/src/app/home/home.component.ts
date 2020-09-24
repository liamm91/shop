import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public catagory: string; // property binding

  constructor() { }

  ngOnInit(): void {
    /**
     * having new as the catagory is temporary until I figure
     * out what exactly to put here
     */
    this.catagory = "new"; // property binding
  }

}
