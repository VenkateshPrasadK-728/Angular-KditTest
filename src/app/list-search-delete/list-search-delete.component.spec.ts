import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSearchDeleteComponent } from './list-search-delete.component';

describe('ListSearchDeleteComponent', () => {
  let component: ListSearchDeleteComponent;
  let fixture: ComponentFixture<ListSearchDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSearchDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSearchDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
