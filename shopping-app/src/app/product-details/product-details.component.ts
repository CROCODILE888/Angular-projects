import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../products';
import { CartService } from '../cart.service';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{

  products: Product | undefined;
  product: Product | undefined;
  // @Input() products : Product | undefined;
  constructor(private route: ActivatedRoute, private cartService: CartService){}
  ngOnInit(): void {
      // const routeParams =  this.route.snapshot.paramMap;
      const proudctIdFromRoute = Number(this.route.snapshot.paramMap.get("productId"));
      // console.log(proudctIdFromRoute);

      this.cartService.getProducts().subscribe((response: any) => {
        this.products=response.products;
        ///filtetout by id
        this.product= response.products.find((product:any) => product.id === proudctIdFromRoute);
        // console.log(this.product);
      })

  }

  addToCart(product:Product){
    this.cartService.addToCart(product);
    window.alert("Item added to cart");
  }
}
