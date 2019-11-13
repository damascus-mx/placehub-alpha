import { Component, OnInit, OnDestroy } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  mobile = false;
  adState = true;

  constructor(private platform: Platform) {
    this.mobile = (platform.ANDROID || platform.IOS) ? true : false;
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

}
