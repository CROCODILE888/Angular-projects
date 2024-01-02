import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { Materials } from './products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[]=[];

  addToCart(product: Product){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items=[];
    // return this.items;
  }
  constructor(private http: HttpClient) { }
  
  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json')
  }
  apiUrl= "https://dummyjson.com/products";

  getMaterials(): Observable<{ materials: Materials[]}>{
    return this.http.get<{materials: Materials[]}>(this.apiUrl)
  }
  
}
