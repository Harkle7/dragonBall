import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gohan2',
  templateUrl: './gohan2.component.html',
  styleUrls: ['./gohan2.component.css']
})
export class Gohan2Component implements OnInit {
  @Output() energiaGohan = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}

  genkidamaAlerta(msg: boolean) {
    this.energiaGohan.emit(msg);
    console.log(msg);
  }
}
