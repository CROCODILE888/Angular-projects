import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  onSubmit(){
    console.warn('Your order has been submitted', this.checkoutForm.value);
    window.alert('Your order has been submitted')
    this.checkoutForm.reset();
  }
  
  constructor(public cartService: CartService, public formBuilder: FormBuilder){}

  // items = this.cartService.getItems();
}
