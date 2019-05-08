import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,

    HomePageComponent,
    CheckoutComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
