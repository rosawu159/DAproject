import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-coop',
  templateUrl: './coop.component.html',
  styleUrls: ['./coop.component.css']
})
export class CoopComponent implements OnInit {
  @Input() parentValue: string; //提供Input裝飾器，讓該屬性成為父親模板的屬性
  @Output() childEvent = new EventEmitter<Date>(); //提供Output裝飾器，讓該事件成為父親模板的事件

  onChildClick() {
    this.childEvent.emit(new Date());
  }
  constructor() { }

  ngOnInit() {
  }

}
