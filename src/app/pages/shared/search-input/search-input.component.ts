import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Place } from 'src/app/domain/models/place.interface';
import { PLACES } from 'src/app/common/mocks/place.mock';
import { Router } from '@angular/router';
import { startWith, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, OnDestroy {
  @Input() mobile = false;
  @Output() finish = new EventEmitter();

  private unsubscriber$ = new Subject<void>();

  keywordCtrl = new FormControl();
  filteredPlaces: Observable<Place[]>;

  places: Place[] = PLACES;

  constructor(private router: Router) {
    this.filteredPlaces = this.keywordCtrl.valueChanges
    .pipe(
      startWith(''),
      map(place => place ? this._onSearch(place) : this.places.slice()),
      takeUntil(this.unsubscriber$)
    );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }

  onSubmit(event?: any) {
    if (event === 'Enter') {
      this.router.navigate(['/explore/search'], { queryParamsHandling: 'merge', queryParams: {keyword: this.keywordCtrl.value} });
      this.finish.emit(true);
    }
  }

  onSelectPlace(username: string ) {
    this.router.navigate([`/place/${username}`]);
    this.finish.emit(true);
  }

  private _onSearch(value: string): Place[] {
    const filterValue = value.toLowerCase();

    return this.places.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

}
