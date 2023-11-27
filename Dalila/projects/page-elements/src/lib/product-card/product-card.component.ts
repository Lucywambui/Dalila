import { Component, Input } from '@angular/core';
import { Product } from 'projects/pages/src/lib/models/product.model';

@Component({
  selector: 'lib-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent {
  @Input() products!: Product[];

}
