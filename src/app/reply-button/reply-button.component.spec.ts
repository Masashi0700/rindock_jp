import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyButtonComponent } from './reply-button.component';

describe('ReplyButtonComponent', () => {
  let component: ReplyButtonComponent;
  let fixture: ComponentFixture<ReplyButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplyButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
