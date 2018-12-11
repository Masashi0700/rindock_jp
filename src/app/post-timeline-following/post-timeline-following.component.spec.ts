import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTimelineFollowingComponent } from './post-timeline-following.component';

describe('PostTimelineFollowingComponent', () => {
  let component: PostTimelineFollowingComponent;
  let fixture: ComponentFixture<PostTimelineFollowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTimelineFollowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTimelineFollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
