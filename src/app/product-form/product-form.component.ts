import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'app/product.service';
import { ResturantsService } from 'app/resturants.service';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  resturant$;
  product={};
  id;
  constructor(
    private resturant : ResturantsService , 
    private productService : ProductService ,private route :ActivatedRoute ,private router:Router ) { 
    this.resturant$ =resturant.getResturants();


    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.productService.get(this.id).take(1).subscribe(p =>this.product =p)

  }
  
  save(product)
  {
    if (this.id) this.productService.update(this.id , product)
    else this.productService.create(product);
    this.router.navigate(['/admin/admin-products']);
  }

  delete(){
    if(!confirm ('Are you sure you want to delete that product!!!')) return;
    this.productService.delete(this.id);
    this.router.navigate(['/admin/admin-products']);
  }
  ngOnInit() {
  }

}
