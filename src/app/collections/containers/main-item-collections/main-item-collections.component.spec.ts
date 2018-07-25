import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainItemCollectionsComponent } from './main-item-collections.component';

describe('MainItemCollectionsComponent', () => {
  let component: MainItemCollectionsComponent;
  let fixture: ComponentFixture<MainItemCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainItemCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainItemCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
