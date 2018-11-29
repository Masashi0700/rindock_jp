import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomPostIndexComponent } from './room-post-index.component';

describe('RoomPostIndexComponent', () => {
  let component: RoomPostIndexComponent;
  let fixture: ComponentFixture<RoomPostIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomPostIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomPostIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
