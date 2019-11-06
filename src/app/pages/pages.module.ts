import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './root/pages.component';
import { MaterialModule } from '../common/modules/material.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProfileSheetComponent } from './shared/profile-sheet/profile-sheet.component';


@NgModule({
  declarations: [PagesComponent, NavbarComponent, ProfileSheetComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
  ],
  entryComponents: [
    ProfileSheetComponent
  ]
})
export class PagesModule { }
