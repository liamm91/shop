// schema for navlinks for the routing module
export interface Navlink {
  routerLink: string;
  text: string;
}

// these are the boxes on the navbar
export const LINKS: Navlink[] = [
  {routerLink: 'on-sale', text: "On Sale"},
  {routerLink: 'new', text: "New"},
  {routerLink: 'living-room', text: "Living Room"},
  {routerLink: 'dining-room', text: "Dining Room"},
  {routerLink: 'office', text: "Office"},
  {routerLink: 'kitchen', text: "Kitchen"},
  {routerLink: 'decorative', text: "Decorative"},
];
