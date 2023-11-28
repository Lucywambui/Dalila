import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { BasketItemsComponent } from './basket-items/basket-items.component';




@NgModule({
  declarations: [
    NavbarComponent,
    ProductCardComponent,
    BasketItemsComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FlexLayoutModule,
  
  ],
  exports: [
    NavbarComponent,
    ProductCardComponent,
    BasketItemsComponent
  
  ]
})
export class PageElementsModule { }
