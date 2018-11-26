import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomWorkComponent } from './room-work.component';

describe('RoomWorkComponent', () => {
  let component: RoomWorkComponent;
  let fixture: ComponentFixture<RoomWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
