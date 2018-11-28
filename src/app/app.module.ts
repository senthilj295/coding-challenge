import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoanComponent } from './loan/loan.component';
import { LoanSingleComponent } from './loan/loan.single.component';
import { LoanService } from './Shared/Service/loan.service';

@NgModule({
  declarations: [
    AppComponent, LoanComponent, LoanSingleComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [LoanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
