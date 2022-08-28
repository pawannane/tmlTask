import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryBusComponent } from './catagory-bus.component';

describe('CatagoryBusComponent', () => {
  let component: CatagoryBusComponent;
  let fixture: ComponentFixture<CatagoryBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatagoryBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagoryBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
