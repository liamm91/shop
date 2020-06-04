import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LINKS } from './navbar/navbar.links';

const routes: Routes = [];

// format: {path: '', component: componentName}
LINKS.forEach(obj => routes.push({path: `${obj.routerLink}`, component: obj.component}));

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
