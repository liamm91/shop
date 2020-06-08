import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LINKS } from './navbar/navbar.links';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent}
];

// format: {path: '', component: componentName}
LINKS.forEach(obj => routes.push({path: `${obj.routerLink}`, component: obj.component}));

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
