import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home.component';
import { StoriesComponent } from '../shared/stories/stories.component';
import { MaterialModule } from 'src/app/common/modules/material.module';


@NgModule({
  declarations: [ HomeComponent, StoriesComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
