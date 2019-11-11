import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './root/pages.component';
import { MaterialModule } from '../common/modules/material.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProfileSheetComponent } from './shared/profile-sheet/profile-sheet.component';
import { CdkModule } from '../common/modules/cdk.module';
import { SearchbarComponent } from './shared/searchbar/searchbar.component';
import { SearchInputComponent } from './shared/search-input/search-input.component';
import { SearchbarOverlayService } from './shared/searchbar/searchbar.service';


@NgModule({
  declarations: [PagesComponent, NavbarComponent, ProfileSheetComponent, SearchbarComponent, SearchInputComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    CdkModule
  ],
  entryComponents: [
    ProfileSheetComponent,
    SearchbarComponent
  ],
  providers: [
    SearchbarOverlayService
  ]
})
export class PagesModule { }
