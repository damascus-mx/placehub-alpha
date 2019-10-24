import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './root/pages.component';
import { MaterialModule } from '../common/modules/material.module';
import { NavbarComponent } from './shared/navbar/navbar.component';


@NgModule({
  declarations: [PagesComponent, NavbarComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
  ],
  entryComponents: [
  ]
})
export class PagesModule { }
