import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTagToComponent } from './search-tag-to.component';

describe('SearchTagToComponent', () => {
  let component: SearchTagToComponent;
  let fixture: ComponentFixture<SearchTagToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTagToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTagToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
