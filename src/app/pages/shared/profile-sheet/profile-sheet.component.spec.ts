import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSheetComponent } from './profile-sheet.component';

describe('ProfileSheetComponent', () => {
  let component: ProfileSheetComponent;
  let fixture: ComponentFixture<ProfileSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
