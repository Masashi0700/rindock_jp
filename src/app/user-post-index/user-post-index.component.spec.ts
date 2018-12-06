import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostIndexComponent } from './user-post-index.component';

describe('UserPostIndexComponent', () => {
  let component: UserPostIndexComponent;
  let fixture: ComponentFixture<UserPostIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPostIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPostIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
