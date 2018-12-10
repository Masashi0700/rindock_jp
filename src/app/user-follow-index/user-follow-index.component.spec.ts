import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFollowIndexComponent } from './user-follow-index.component';

describe('UserFollowIndexComponent', () => {
  let component: UserFollowIndexComponent;
  let fixture: ComponentFixture<UserFollowIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFollowIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFollowIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
