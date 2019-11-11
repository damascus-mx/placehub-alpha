import { Injectable, OnDestroy, Injector, ComponentRef } from '@angular/core';
import { SearchbarComponent } from './searchbar.component';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { SearchbarOverlayRef } from './search.reference';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable()
export class SearchbarOverlayService implements OnDestroy {
    // Observer
    private unsubscribe$ = new Subject<void>();

    // Inject overlay service
    constructor(private overlay: Overlay, private injector: Injector) { }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    open() {
        // Returns an OverlayRef (which is a PortalHost)
        const overlayRef = this.overlay.create({
            maxHeight: 'auto',
            maxWidth: '100%',
            width: '100%',
            hasBackdrop: true,
            disposeOnNavigation: true,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: this.overlay.position().global().top()
        });

        // Instantiate remote control
        const dialogRef = new SearchbarOverlayRef(overlayRef);

        const overlayComponent = this.attachDialogContainer(overlayRef, dialogRef);

        // Subscribe to a stream that emits when the backdrop was clicked
        overlayRef.backdropClick().pipe(takeUntil(this.unsubscribe$)).subscribe(_ => dialogRef.close());

        // Return remote control
        return dialogRef;
    }

    private createInjector(dialogRef: SearchbarOverlayRef): PortalInjector {
        // Instantiate new WeakMap for our custom injection tokens
        const injectionTokens = new WeakMap();

        // Set custom injection tokens
        injectionTokens.set(SearchbarOverlayRef, dialogRef);

        // Instantiate new PortalInjector
        return new PortalInjector(this.injector, injectionTokens);
    }

    private attachDialogContainer(overlayRef: OverlayRef, dialogRef: SearchbarOverlayRef) {
        const injector = this.createInjector(dialogRef);

        const containerPortal = new ComponentPortal(SearchbarComponent, null, injector);
        const containerRef: ComponentRef<SearchbarComponent> = overlayRef.attach(containerPortal);

        return containerRef.instance;
    }
}
