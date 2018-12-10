import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSimpleComponent } from './user-simple.component';

describe('UserSimpleComponent', () => {
  let component: UserSimpleComponent;
  let fixture: ComponentFixture<UserSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
