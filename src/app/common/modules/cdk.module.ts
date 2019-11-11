import { NgModule } from '@angular/core';
import { OverlayModule, OverlayContainer, FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';


@NgModule({
  declarations: [],
  exports: [
    OverlayModule,
    PortalModule
  ]
})
export class CdkModule { }
