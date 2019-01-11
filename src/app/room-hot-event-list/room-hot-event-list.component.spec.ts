import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomHotEventListComponent } from './room-hot-event-list.component';

describe('RoomHotEventListComponent', () => {
  let component: RoomHotEventListComponent;
  let fixture: ComponentFixture<RoomHotEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomHotEventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomHotEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
