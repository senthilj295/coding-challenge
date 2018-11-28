import { Component } from '@angular/core';
import { LoanComponent } from './loan.component';

@Component({
  selector: 'app-loan-single',
  template: `
  <div class='container-fluid'>
  <div class='row'>
      <div class="col-sm-1"></div>
      <div class='col-sm-10  body-content' style="padding-top: 10px; font-weight: bold;">
          Personal Loan TopUp or Apply
      </div>

  </div>
  <div class='row'>
      <div class="col-sm-1"></div>
      <div class='col-sm-10  body-content'>
          <table class="table">
              <tr>
                  <td style="width:40%; text-align: left;">To apply for a TopUp of an existing loan amount, please
                      select the loan below, make note of the
                      Carry-over amount before proceeding.</td>
                  <td style="width:20%; text-align: right;">Carryover / Payout Amount <b>$0</b></td>
                  <td style="width:40%; text-align: left; border-left: 1px solid #ddd;">
                      <input type="submit" disabled value="Apply for Increased Loan amounts">
                  </td>
              </tr>
          </table>
      </div>
  </div>
  <div class='row'>
      <div class="col-sm-1"></div>
      <div class='col-sm-10  body-content'>
          <table class="table">
              <tr>
                  <td style="width:40%; text-align: left;"></td>
                  <td style="width:20%; text-align: right;"></td>
                  <td style="width:40%; text-align: left; border-left: 1px solid #ddd;">
                      <input type="submit" value="Apply for new Personal Loan">
                  </td>
              </tr>
          </table>
      </div>
  </div>
  <div class='row'>
      <div class="col-sm-1"></div>
      <div class='col-sm-10  body-content'>
          <table class="table1">
              <tr>
                  <td style="width:40%; text-align: left;"></td>
                  <td style="width:20%; text-align: right;"></td>
                  <td style="width:40%; text-align: left;">
                  </td>
              </tr>
          </table>
      </div>
  </div>
  <br>
  <span style="padding-left: 110px">You have 1 Personal Loan</span>
  <br>
  <br>
  <br>
  <div class='row'>
      <div class="col-sm-1"></div>
      <div class='col-sm-10  body-content'>
          <table class="table2 loan-list card card-strong">
              <thead>
                      <tr>
                          <th colspan="3" style="width:40%; text-align: left; background-color: #ddd;">1. Tempore fuga quaerat # 933217230</th>                    
                      </tr>
              </thead>
              <tr>
                  <td style="width:40%; text-align: left;">Balanace</td>
                  <td style="width:20%; text-align: right;">$1,225</td>
                  <td style="width:40%; text-align: left;">
                      <input (change)="selectLoan(Balanace,$event)" value="Top Up" type="checkbox"/>   Top Up                               
                  </td>
              </tr>
          </table>
      </div>
  </div>
</div>
  `
})
export class LoanSingleComponent extends LoanComponent { }
