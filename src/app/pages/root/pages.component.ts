import {  Component, OnInit, ViewChild, ElementRef, HostListener, Renderer2 } from '@angular/core';

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

  constructor(private render: Renderer2) {
  }

  ngOnInit() {
  }

  onSearch(): void {
    if ( this.openSearch ) {
      this.openSearch = false;

      this.render.removeClass(this.search.nativeElement, 'slideInDown');
      this.render.addClass(this.search.nativeElement, 'slideOutUp');

      this.render.removeClass(this.search.nativeElement, 'enabled');
    } else {
      this.openSearch = true;

      this.render.removeClass(this.search.nativeElement, 'disabled');
      this.render.addClass(this.search.nativeElement, 'enabled');

      this.render.removeClass(this.search.nativeElement, 'slideOutUp');
      this.render.addClass(this.search.nativeElement, 'slideInDown');
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
