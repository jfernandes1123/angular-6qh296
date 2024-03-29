import { Component } from '@angular/core';
import { items } from '../items';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  items = items;
  share() {
    window.alert('testing share dialog');
  }
  onNotify() {
    window.alert('You will be notified when this item self destructs');
  }
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/