import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public catagory: string; // property binding

  constructor(private router: Router) { }

  ngOnInit(): void {
    /**
     * this is to take the url and set the catagory to it,
     * which will be used in order to communicate with the backend
     */
    this.catagory = this.router.url.split('/')[1];
  }

}
