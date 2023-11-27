import { Component } from '@angular/core';
import { Product, products } from '../models/product.model';


@Component({
  selector: 'lib-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  products: Product[] = products;
}
