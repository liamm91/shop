import { Navlink } from './navbar.interface';

// adding all the references to the other components
import { SaleComponent } from '../sale/sale.component';
import { NewComponent } from '../new/new.component';
import { LivingroomComponent } from '../livingroom/livingroom.component';
import { DiningroomComponent } from '../diningroom/diningroom.component';
import { OfficeComponent } from '../office/office.component';
import { KitchenComponent } from '../kitchen/kitchen.component';
import { DecorativeComponent } from '../decorative/decorative.component';

export const LINKS: Navlink[] = [
  {component: SaleComponent, routerLink: '/sale', linkText: 'On Sale'},
  {component: NewComponent, routerLink: '/new', linkText: 'New'},
  {component: LivingroomComponent, routerLink: '/livingroom', linkText: 'Living Room'},
  {component: DiningroomComponent, routerLink: '/diningroom', linkText: 'Dining Room'},
  {component: OfficeComponent, routerLink: '/office', linkText: 'Office'},
  {component: KitchenComponent, routerLink: '/kitchen', linkText: 'Kitchen'},
  {component: DecorativeComponent, routerLink: '/decorative', linkText: 'Decorative'},
];
