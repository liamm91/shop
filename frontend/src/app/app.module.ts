import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductboxComponent } from './productbox/productbox.component';
import { PromotionalbarComponent } from './promotionalbar/promotionalbar.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { UserbarComponent } from './userbar/userbar.component';
import { ProductviewpageComponent } from './productviewpage/productviewpage.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    ProductboxComponent,
    PromotionalbarComponent,
    ContactpageComponent,
    UserbarComponent,
    ProductviewpageComponent,
    BodyComponent,
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
