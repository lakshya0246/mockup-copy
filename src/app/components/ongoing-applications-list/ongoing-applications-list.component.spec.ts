import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingApplicationsListComponent } from './ongoing-applications-list.component';

describe('OngoingApplicationsListComponent', () => {
  let component: OngoingApplicationsListComponent;
  let fixture: ComponentFixture<OngoingApplicationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OngoingApplicationsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingApplicationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
