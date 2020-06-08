import { Component, OnInit } from '@angular/core';
import { LINKS } from './navbar.links';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarLinks = LINKS;

  constructor() { }

  ngOnInit(): void {
  }

}
