import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomSubsListComponent } from './room-subs-list.component';

describe('RoomSubsListComponent', () => {
  let component: RoomSubsListComponent;
  let fixture: ComponentFixture<RoomSubsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomSubsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomSubsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
