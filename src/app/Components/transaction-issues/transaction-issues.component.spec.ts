import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionIssuesComponent } from './transaction-issues.component';

describe('TransactionIssuesComponent', () => {
  let component: TransactionIssuesComponent;
  let fixture: ComponentFixture<TransactionIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionIssuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
