import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageheadComponent } from './pagehead/pagehead.component';

const routes: Routes = [
  { path: '', component: PageheadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
