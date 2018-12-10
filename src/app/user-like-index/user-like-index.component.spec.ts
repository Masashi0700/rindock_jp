import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLikeIndexComponent } from './user-like-index.component';

describe('UserLikeIndexComponent', () => {
  let component: UserLikeIndexComponent;
  let fixture: ComponentFixture<UserLikeIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLikeIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLikeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
