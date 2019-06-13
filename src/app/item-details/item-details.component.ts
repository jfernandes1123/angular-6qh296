import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { items } from '../items';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  item;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.item = items[+params.get('itemId')];
    });
  }
  addToCart(item) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(item);
  }
}