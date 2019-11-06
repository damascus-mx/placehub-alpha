import {  Component, OnInit, ViewChild, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { ProfileSheetComponent } from '../shared/profile-sheet/profile-sheet.component';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  @ViewChild('navbar', {static: false}) navbar: ElementRef;
  @ViewChild('search', {static: false}) search: ElementRef;
  searchInput: string;
  openSearch = false;

  constructor(private render: Renderer2, private profileSheet: MatBottomSheet) {
  }

  ngOnInit() {
  }

  onProfile(): void {
    this.profileSheet.open(ProfileSheetComponent);
  }

  onSearch(): void {
    if ( this.openSearch ) {
      this.openSearch = false;

      this.render.removeClass(this.search.nativeElement, 'slideInRight');
      this.render.addClass(this.search.nativeElement, 'slideOutRight');

      this.render.removeClass(this.search.nativeElement, 'enabled');
    } else {
      this.openSearch = true;

      this.render.removeClass(this.search.nativeElement, 'disabled');
      this.render.addClass(this.search.nativeElement, 'enabled');

      this.render.removeClass(this.search.nativeElement, 'slideOutRight');
      this.render.addClass(this.search.nativeElement, 'slideInRight');
    }
  }

  @HostListener('document:scroll', [])
  onScroll(): void {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      this.render.addClass(this.navbar.nativeElement, 'navbar-alt');
    } else {
      this.render.removeClass(this.navbar.nativeElement, 'navbar-alt');
    }
  }

}
