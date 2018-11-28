import { Component } from '@angular/core';
import { Loan } from './loan/loan';

const loans: Loan[] = [
  { LoanID: 933217230, LoanName: 'Tempore fuga quaerat', LoanBalanceAmount: 1225.00, CustomerID: 1 }
];

@Component({
  selector: 'loan-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  loans = loans
  selectedLoan = loans[0];

  constructor() { }

  ngOnInit() { }

  selectLoan(loan: Loan) {
    this.selectedLoan = loan;
  }
}
