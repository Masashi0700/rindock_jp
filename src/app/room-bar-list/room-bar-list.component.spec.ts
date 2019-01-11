import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBarListComponent } from './room-bar-list.component';

describe('RoomBarListComponent', () => {
  let component: RoomBarListComponent;
  let fixture: ComponentFixture<RoomBarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomBarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomBarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
