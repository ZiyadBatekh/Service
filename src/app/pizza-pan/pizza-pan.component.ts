import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/product.service';

@Component({
  selector: 'app-pizza-pan',
  templateUrl: './pizza-pan.component.html',
  styleUrls: ['./pizza-pan.component.css']
})
export class PizzaPanComponent implements OnInit {
products$
  constructor(private product: ProductService) {
    this.products$=this.product.getAll();
   }

  ngOnInit() {
  }

}
