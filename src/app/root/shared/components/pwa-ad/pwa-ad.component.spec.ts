import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaAdComponent } from './pwa-ad.component';

describe('PwaAdComponent', () => {
  let component: PwaAdComponent;
  let fixture: ComponentFixture<PwaAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwaAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwaAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
