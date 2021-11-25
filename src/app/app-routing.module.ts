import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HompageComponent } from './Components/hompage/hompage.component';
import { LoginpageComponent } from './Components/loginpage/loginpage.component';
import { TransactionDetailsComponent } from './Components/transaction-details/transaction-details.component';
import { TransactionIssuesComponent } from './Components/transaction-issues/transaction-issues.component';
import { TransactionSuccessComponent } from './Components/transaction-success/transaction-success.component';
import { TransferComponent } from './Components/transfer/transfer.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  {path:"",component:LoginpageComponent,pathMatch:'full'},
  {path:"Dashboard",component:DashboardComponent,
         children:[
           {path:"",component:HompageComponent},
           {path:"home",component:HompageComponent},
           {path:"transfer",component:TransferComponent},
           {path:"T-details",component:TransactionDetailsComponent},
           {path:"T-success",component:TransactionSuccessComponent},
           {path:"T-issues",component:TransactionIssuesComponent},
           {path:"User",component:UsersComponent}
         ]
        }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
