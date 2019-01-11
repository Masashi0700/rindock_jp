import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomSubsToBarComponent } from './room-subs-to-bar.component';

describe('RoomSubsToBarComponent', () => {
  let component: RoomSubsToBarComponent;
  let fixture: ComponentFixture<RoomSubsToBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomSubsToBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomSubsToBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
