import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedAvengerComponent } from './selected-avenger.component';

describe('SelectedAvengerComponent', () => {
  let component: SelectedAvengerComponent;
  let fixture: ComponentFixture<SelectedAvengerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedAvengerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedAvengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
