import { OverlayRef } from '@angular/cdk/overlay';

export class SearchbarOverlayRef {

  constructor(private overlayRef: OverlayRef) { }

  close(): void {
    this.overlayRef.dispose();
  }
}
