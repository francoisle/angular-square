import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareHistoryComponent } from './square-history.component';

describe('SquareHistoryComponent', () => {
  let component: SquareHistoryComponent;
  let fixture: ComponentFixture<SquareHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
