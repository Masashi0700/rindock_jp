import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBarComponent } from './room-bar.component';

describe('RoomBarComponent', () => {
  let component: RoomBarComponent;
  let fixture: ComponentFixture<RoomBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
