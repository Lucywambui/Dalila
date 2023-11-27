import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    NavbarComponent,
    ProductCardComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FlexLayoutModule,
  
  ],
  exports: [
    NavbarComponent,
    ProductCardComponent
  
  ]
})
export class PageElementsModule { }
