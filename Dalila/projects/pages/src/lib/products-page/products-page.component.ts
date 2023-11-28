import { Component } from '@angular/core';
import { Product, products } from '../models/product.model';

@Component({
  selector: 'lib-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent {
  products: Product[] = products;

}
