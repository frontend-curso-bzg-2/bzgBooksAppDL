import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainItemFavoritesComponent } from './main-item-favorites.component';

describe('MainItemFavoritesComponent', () => {
  let component: MainItemFavoritesComponent;
  let fixture: ComponentFixture<MainItemFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainItemFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainItemFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
