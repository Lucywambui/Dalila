import { ComponentFixture } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from 'projects/pages/src/lib/homepage/homepage.component';
import { ProductsPageComponent } from 'projects/pages/src/lib/products-page/products-page.component';
import { BasketPageComponent } from 'projects/pages/src/lib/basket-page/basket-page.component';
import { ReviewPageComponent } from 'projects/pages/src/lib/review-page/review-page.component';
import { LoginPageComponent } from 'projects/pages/src/lib/login-page/login-page.component';

const routes: Routes = [
{path: '', component:HomepageComponent},
{path:'home', component: HomepageComponent},
{path:'products', component:ProductsPageComponent},
{path:'basket', component:BasketPageComponent},
{path:'login' , component: LoginPageComponent},
{path:'order-review', component: ReviewPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
