import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';
import { Materials } from '../products';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export class ShippingComponent implements OnInit{
  constructor(private cartService: CartService){}
  materials: Materials[]=[];
  displayedMaterials: Materials[]=[];
  numberToDisplay=3;
  num=0;
  
  shippingCosts!: Observable<{type: string, price: number}[]>;
  ngOnInit(): void {
      this.shippingCosts=this.cartService.getShippingPrices();
      this.cartService.getMaterials().subscribe((response: any) => {
        this.materials=response.products;
        this.updateDisplayedMaterials();
      })
  }
  updateDisplayedMaterials(): void{
    this.displayedMaterials=this.materials.slice(this.num,this.numberToDisplay);
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
