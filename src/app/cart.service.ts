import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  list = [];
  addToCart(item) {
    this.list.push(item);
  }
  getItems() {
    return this.list;
  }
  clearCart() {
    this.list = [];
    return this.list;
  }
}