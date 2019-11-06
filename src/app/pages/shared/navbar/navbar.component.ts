import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { ProfileSheetComponent } from '../profile-sheet/profile-sheet.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private profileSheet: MatBottomSheet) { }

  ngOnInit() {
  }

  onProfile() {
    this.profileSheet.open(ProfileSheetComponent);
  }

}
