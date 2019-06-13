import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  list = [];
  constructor(
    private http: HttpClient
  ) { }
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
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}