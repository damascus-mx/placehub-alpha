import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-bottomexample',
  templateUrl: './bottomexample.component.html',
  styleUrls: ['./bottomexample.component.scss']
})
export class BottomexampleComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<BottomexampleComponent>) { }

  ngOnInit() {
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
