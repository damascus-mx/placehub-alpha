import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { ProfileSheetComponent } from '../profile-sheet/profile-sheet.component';
import { Router, Event, NavigationStart } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  private subject$ = new Subject<void>();
  isHome = false;

  constructor(private profileSheet: MatBottomSheet, private router: Router) {
    this.isHome = (this.router.url === '/') ? true : false;
  }

  ngOnInit() {

    this.router.events.pipe(takeUntil(this.subject$), filter(event => event instanceof NavigationStart))
        .subscribe((e: NavigationStart) => {
          this.isHome = (e.url === '/') ? true : false;
        });
  }

  ngOnDestroy(): void {
    this.subject$.next();
    this.subject$.complete();
  }

  onProfile() {
    this.profileSheet.open(ProfileSheetComponent);
  }

}
