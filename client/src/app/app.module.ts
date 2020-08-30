import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SaleComponent } from './sale/sale.component';
import { NewComponent } from './new/new.component';
import { LivingroomComponent } from './livingroom/livingroom.component';
import { DiningroomComponent } from './diningroom/diningroom.component';
import { OfficeComponent } from './office/office.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { DecorativeComponent } from './decorative/decorative.component';
import { HomeComponent } from './home/home.component';
import { ProductboxComponent } from './productbox/productbox.component';
import { PromotionalbarComponent } from './promotionalbar/promotionalbar.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { UserbarComponent } from './userbar/userbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SaleComponent,
    NewComponent,
    LivingroomComponent,
    DiningroomComponent,
    OfficeComponent,
    KitchenComponent,
    DecorativeComponent,
    HomeComponent,
    ProductboxComponent,
    PromotionalbarComponent,
    ContactpageComponent,
    UserbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
