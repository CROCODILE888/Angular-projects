import { Component, OnInit } from '@angular/core';
// import { products } from '../products';
import { CartService } from '../cart.service';
import { Product } from '../products';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  // products = [...products];

  share(){
    window.alert("The product has been shared!")
  }
  onNotify(){
    window.alert("You will be notified");
  }

  constructor(private cartService: CartService){}
  products: Product[]=[];
  displayedMaterials: Product[]=[];
  numberToDisplay=3;
  num=0;
  
  // shippingCosts!: Observable<{type: string, price: number}[]>;
  ngOnInit(): void {
      // this.shippingCosts=this.cartService.getShippingPrices();
      this.cartService.getProducts().subscribe((response: any) => {
        this.products=response.products;
        this.updateDisplayedMaterials();
      })
      console.log(this.products)
  }
  
  updateDisplayedMaterials(): void{
    this.displayedMaterials=this.products.slice(this.num,this.numberToDisplay);
  }

  loadMore():void{
    this.num+=3;
    this.numberToDisplay+=3;
    this.updateDisplayedMaterials();
  }

  loadBack():void{
    this.num-=3;
    this.numberToDisplay-=3
    this.updateDisplayedMaterials();
  }
}
