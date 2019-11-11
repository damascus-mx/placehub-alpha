import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-profile-sheet',
  templateUrl: './profile-sheet.component.html',
  styleUrls: ['./profile-sheet.component.scss']
})
export class ProfileSheetComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<ProfileSheetComponent>) { }

  ngOnInit() {
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    /*event.preventDefault();*/
  }

}
