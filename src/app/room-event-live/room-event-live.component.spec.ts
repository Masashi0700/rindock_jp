import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomEventLiveComponent } from './room-event-live.component';

describe('RoomEventLiveComponent', () => {
  let component: RoomEventLiveComponent;
  let fixture: ComponentFixture<RoomEventLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomEventLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomEventLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
