import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFollowerIndexComponent } from './user-follower-index.component';

describe('UserFollowerIndexComponent', () => {
  let component: UserFollowerIndexComponent;
  let fixture: ComponentFixture<UserFollowerIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFollowerIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFollowerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
