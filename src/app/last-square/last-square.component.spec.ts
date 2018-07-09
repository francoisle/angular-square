import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastSquareComponent } from './last-square.component';

describe('LastSquareComponent', () => {
  let component: LastSquareComponent;
  let fixture: ComponentFixture<LastSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
