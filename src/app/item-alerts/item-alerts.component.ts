import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-item-alerts',
  templateUrl: './item-alerts.component.html',
  styleUrls: ['./item-alerts.component.css']
})
export class ItemAlertsComponent implements OnInit {
  @Input() item;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}