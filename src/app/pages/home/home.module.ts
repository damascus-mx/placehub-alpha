import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home.component';
import { StoriesComponent } from '../shared/stories/stories.component';
import { MaterialModule } from 'src/app/common/modules/material.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PwaAdComponent } from 'src/app/root/shared/components/pwa-ad/pwa-ad.component';
import { PlatformModule } from '@angular/cdk/platform';


@NgModule({
  declarations: [ HomeComponent, StoriesComponent, PwaAdComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ScrollingModule,
    PlatformModule
  ]
})
export class HomeModule { }
