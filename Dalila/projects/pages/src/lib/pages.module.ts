import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CustomerInfoPageComponent } from './customer-info-page/customer-info-page.component';
import { BasketPageComponent } from './basket-page/basket-page.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { PageElementsModule } from 'projects/page-elements/src/public-api';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  CdkMenu,
  CdkMenuItem,
  CdkMenuItemRadio,
  CdkMenuGroup,
  CdkMenuItemCheckbox,
  CdkMenuTrigger,
} from '@angular/cdk/menu';

@NgModule({
  declarations: [
    HomepageComponent,
    ProductsPageComponent,
    LoginPageComponent,
    CustomerInfoPageComponent,
    BasketPageComponent,
    ReviewPageComponent
  ],
  imports: [
    CdkMenuTrigger,
    CdkMenu,
    CdkMenuItemCheckbox,
    CdkMenuGroup,
    CdkMenuItemRadio,
    CdkMenuItem,
    PageElementsModule,
    FlexLayoutModule,
    CommonModule

  ],
  exports: [
    HomepageComponent,
    ProductsPageComponent,
    LoginPageComponent,
    CustomerInfoPageComponent,
    BasketPageComponent,
    ReviewPageComponent
  ]
})
export class PagesModule { }
