import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSearchBooksComponent } from './nav-search-books.component';

describe('NavSearchBooksComponent', () => {
  let component: NavSearchBooksComponent;
  let fixture: ComponentFixture<NavSearchBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSearchBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSearchBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
