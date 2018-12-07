import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomEventIndexComponent } from './room-event-index.component';

describe('RoomEventIndexComponent', () => {
  let component: RoomEventIndexComponent;
  let fixture: ComponentFixture<RoomEventIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomEventIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomEventIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
