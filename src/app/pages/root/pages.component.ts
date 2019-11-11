import {  Component, OnInit, ViewChild, ElementRef, HostListener, Renderer2, AfterViewInit, InjectionToken, OnDestroy } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { ProfileSheetComponent } from '../shared/profile-sheet/profile-sheet.component';
import { ComponentPortal } from '@angular/cdk/portal';
import { SearchbarComponent } from '../shared/searchbar/searchbar.component';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { Subject, pipe } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { SearchbarOverlayService } from '../shared/searchbar/searchbar.service';

export const PORTAL_DATA = new InjectionToken<{}>('PortalData');

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  @ViewChild('navbar', {static: false}) navbar: ElementRef;

  constructor(private render: Renderer2, private profileSheet: MatBottomSheet,
              private searchOverlay: SearchbarOverlayService) {
  }

  ngOnInit() {
  }

  onProfile(): void {
    this.profileSheet.open(ProfileSheetComponent);
  }

  onSearch(): void {
    this.searchOverlay.open();
  }

  @HostListener('document:scroll', [])
  onScroll(): void {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
      this.render.addClass(this.navbar.nativeElement, 'navbar-alt');
    } else {
      this.render.removeClass(this.navbar.nativeElement, 'navbar-alt');
    }
  }

}
