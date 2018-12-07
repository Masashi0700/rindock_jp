import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomEventNewComponent } from './room-event-new.component';

describe('RoomEventNewComponent', () => {
  let component: RoomEventNewComponent;
  let fixture: ComponentFixture<RoomEventNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomEventNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomEventNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
