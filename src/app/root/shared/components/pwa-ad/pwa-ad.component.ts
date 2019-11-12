import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pwa-ad',
  templateUrl: './pwa-ad.component.html',
  styleUrls: ['./pwa-ad.component.scss']
})
export class PwaAdComponent implements OnInit {

  @Input() isMobile ?= true;

  constructor() { }

  ngOnInit() {
  }

}
