import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorSingleComponent } from './tutor-single.component';

describe('TutorSingleComponent', () => {
  let component: TutorSingleComponent;
  let fixture: ComponentFixture<TutorSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
