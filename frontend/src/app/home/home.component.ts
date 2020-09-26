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
     * having 'all' as the catagory is temporary until I figure
     * out what exactly to put here.
     * I'm keeping the home component just incase I want to
     * do something unique with the first page, which doesn't apply
     * to the generic body component template
     */
    this.catagory = "all"; // property binding
  }

}
