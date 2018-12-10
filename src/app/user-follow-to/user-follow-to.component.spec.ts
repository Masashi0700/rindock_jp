import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFollowToComponent } from './user-follow-to.component';

describe('UserFollowToComponent', () => {
  let component: UserFollowToComponent;
  let fixture: ComponentFixture<UserFollowToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFollowToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFollowToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
