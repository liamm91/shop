import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotionalbar',
  templateUrl: './promotionalbar.component.html',
  styleUrls: ['./promotionalbar.component.css']
})
export class PromotionalbarComponent implements OnInit {

  destroyed: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  destroy(): void {
    this.destroyed = true;
  }

}
