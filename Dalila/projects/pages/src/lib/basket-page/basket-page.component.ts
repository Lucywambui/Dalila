import { Component } from '@angular/core';
import { Product, products } from '../models/product.model';

@Component({
  selector: 'lib-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss']
})
export class BasketPageComponent {
  products: Product[] = products;
}
