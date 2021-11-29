import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HompageComponent } from './Components/hompage/hompage.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { TransferComponent } from './Components/transfer/transfer.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { LoginpageComponent } from './Components/loginpage/loginpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionDetailsComponent } from './Components/transaction-details/transaction-details.component';
import { UsersComponent } from './Components/users/users.component';
import { TransactionIssuesComponent } from './Components/transaction-issues/transaction-issues.component';
import { TransactionSuccessComponent } from './Components/transaction-success/transaction-success.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HompageComponent,
    DashboardComponent,
    TransferComponent,
    SidenavComponent,
    HeaderComponent,
    FooterComponent,
    LoginpageComponent,
    TransactionDetailsComponent,
    UsersComponent,
    TransactionIssuesComponent,
    TransactionSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,
    MatGridListModule,
    MatTableModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
