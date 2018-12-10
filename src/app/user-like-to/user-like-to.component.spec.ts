import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLikeToComponent } from './user-like-to.component';

describe('UserLikeToComponent', () => {
  let component: UserLikeToComponent;
  let fixture: ComponentFixture<UserLikeToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLikeToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLikeToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
