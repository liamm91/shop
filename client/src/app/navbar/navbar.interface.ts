import { Type } from '@angular/core';

export interface Navlink {
  component: Type<any>;
  routerLink: string;
  linkText: string;
}
