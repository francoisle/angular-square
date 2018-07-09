import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowSquareComponent } from './yellow-square.component';

describe('YellowSquareComponent', () => {
  let component: YellowSquareComponent;
  let fixture: ComponentFixture<YellowSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YellowSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YellowSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
