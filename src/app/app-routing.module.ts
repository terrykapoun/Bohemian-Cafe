import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuComponent } from './menu/menu.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: '**', redirectTo: 'home'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
