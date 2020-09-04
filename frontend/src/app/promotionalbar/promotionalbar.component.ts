import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotionalbar',
  templateUrl: './promotionalbar.component.html',
  styleUrls: ['./promotionalbar.component.css']
})
export class PromotionalbarComponent implements OnInit {

  destroyed: boolean; // handles whether the component is seen or not

  constructor() { }

  ngOnInit(): void {
  }

  destroy(): void { // updates visibility of component when the user clicks on the button
    this.destroyed = true;
  }

}
