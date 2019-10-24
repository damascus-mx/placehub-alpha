import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomexampleComponent } from './bottomexample.component';

describe('BottomexampleComponent', () => {
  let component: BottomexampleComponent;
  let fixture: ComponentFixture<BottomexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
