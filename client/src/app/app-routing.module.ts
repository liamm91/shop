import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LINKS } from './navbar/navbar.links';
import { HomeComponent } from './home/home.component';
import { ContactpageComponent } from './contactpage/contactpage.component';

// redirects users to proper website
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'}, // takes users to the home page
  {path: 'home', component: HomeComponent}, // loads the home page when users enter
  {path: 'contact', component: ContactpageComponent} // route to the contact us page
];

// pushing routes to other components to the main router module
// format: {path: '', component: componentName}
LINKS.forEach(obj => routes.push({path: `${obj.routerLink}`, component: obj.component}));

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
