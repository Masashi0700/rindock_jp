import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSimpleComponent } from './event-simple.component';

describe('EventSimpleComponent', () => {
  let component: EventSimpleComponent;
  let fixture: ComponentFixture<EventSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
