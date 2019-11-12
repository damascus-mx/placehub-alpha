import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { SearchbarOverlayRef } from './search.reference';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('search', {static: false}) search: ElementRef;

  constructor(private render: Renderer2, public dialogRef: SearchbarOverlayRef) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Open bar
    this.render.removeClass(this.search.nativeElement, 'disabled');
    this.render.addClass(this.search.nativeElement, 'enabled');

    this.render.removeClass(this.search.nativeElement, 'slideOutUp');
    this.render.addClass(this.search.nativeElement, 'slideInDown');
  }

  ngOnDestroy(): void {
  }

  onClose(event?: any): void {
    this.dialogRef.close();
  }

  @HostListener('document:keydown', ['$event']) handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.dialogRef.close();
    }
  }

}
