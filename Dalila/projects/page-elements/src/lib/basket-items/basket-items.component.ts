import { Component, Input } from '@angular/core';
import { Product } from 'projects/pages/src/lib/models/product.model';

@Component({
  selector: 'lib-basket-items',
  templateUrl: './basket-items.component.html',
  styleUrls: ['./basket-items.component.scss']
})
export class BasketItemsComponent {
  @Input() products!: Product[];
}
