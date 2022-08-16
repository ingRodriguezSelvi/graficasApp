import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrasDoubleComponent } from './barras-double.component';

describe('BarrasDoubleComponent', () => {
  let component: BarrasDoubleComponent;
  let fixture: ComponentFixture<BarrasDoubleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrasDoubleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarrasDoubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
