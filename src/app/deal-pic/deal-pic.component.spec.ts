import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealPicComponent } from './deal-pic.component';

describe('DealPicComponent', () => {
  let component: DealPicComponent;
  let fixture: ComponentFixture<DealPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
