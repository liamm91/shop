import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { PageheadComponent } from './pagehead/pagehead.component';
import { SaleComponent } from './sale/sale.component';
import { NewComponent } from './new/new.component';
import { LivingroomComponent } from './livingroom/livingroom.component';
import { DiningroomComponent } from './diningroom/diningroom.component';
import { OfficeComponent } from './office/office.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { DecorativeComponent } from './decorative/decorative.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    PageheadComponent,
    SaleComponent,
    NewComponent,
    LivingroomComponent,
    DiningroomComponent,
    OfficeComponent,
    KitchenComponent,
    DecorativeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
