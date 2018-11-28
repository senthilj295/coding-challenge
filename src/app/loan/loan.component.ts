import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Loan } from '../loan/loan';

@Component({
  selector: 'app-loan',
  template: ''
})
export class LoanComponent {
  @Input() loans: Loan[] = [];
  @Output() select = new EventEmitter();

  heading = 'Personal Loan TopUp or Apply';

  selectLoan(loan: Loan) {
    this.select.emit(loan);
  }
}
