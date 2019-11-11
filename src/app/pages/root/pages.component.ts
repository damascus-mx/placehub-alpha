import {  Component, OnInit, ViewChild, ElementRef, HostListener, Renderer2, InjectionToken, OnDestroy } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { ProfileSheetComponent } from '../shared/profile-sheet/profile-sheet.component';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { SearchbarOverlayService } from '../shared/searchbar/searchbar.service';
import { Router, NavigationStart } from '@angular/router';

export const PORTAL_DATA = new InjectionToken<{}>('PortalData');

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit, OnDestroy {
  @ViewChild('navbar', {static: false}) navbar: ElementRef;
  private subject$ = new Subject<void>();
  isProfile = '';

  constructor(private render: Renderer2, private profileSheet: MatBottomSheet,
              private searchOverlay: SearchbarOverlayService, private router: Router) {
    this.isProfile = (this.router.url.startsWith('/account')) ? 'primary' : '';
  }

  ngOnInit() {
    this.router.events.pipe(takeUntil(this.subject$), filter(event => event instanceof NavigationStart))
        .subscribe((e: NavigationStart) => {
          this.isProfile = (e.url.startsWith('/account')) ? 'primary' : '';
        });
  }

  ngOnDestroy(): void {
    this.subject$.next();
    this.subject$.complete();
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
