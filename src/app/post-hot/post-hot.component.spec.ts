import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostHotComponent } from './post-hot.component';

describe('PostHotComponent', () => {
  let component: PostHotComponent;
  let fixture: ComponentFixture<PostHotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostHotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostHotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
