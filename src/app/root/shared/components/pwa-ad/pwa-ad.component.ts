import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pwa-ad',
  templateUrl: './pwa-ad.component.html',
  styleUrls: ['./pwa-ad.component.scss']
})
export class PwaAdComponent implements OnInit {
  @Input()  adState;
  @Output() adStateChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.adStateChange.emit(false);
  }

}
