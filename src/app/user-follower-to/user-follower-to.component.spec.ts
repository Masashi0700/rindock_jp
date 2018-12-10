import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFollowerToComponent } from './user-follower-to.component';

describe('UserFollowerToComponent', () => {
  let component: UserFollowerToComponent;
  let fixture: ComponentFixture<UserFollowerToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFollowerToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFollowerToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
