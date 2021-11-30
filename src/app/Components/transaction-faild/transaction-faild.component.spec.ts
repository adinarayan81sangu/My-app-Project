import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionFaildComponent } from './transaction-faild.component';

describe('TransactionFaildComponent', () => {
  let component: TransactionFaildComponent;
  let fixture: ComponentFixture<TransactionFaildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionFaildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionFaildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
