import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { LookupCustomerComponent } from './components/lookup-customer/lookup-customer.component';
import { NewRentComponent } from './components/new-rent/new-rent.component';
import { CustomerService } from './services/customer.service';
import { FlexLayoutModule } from '@angular/flex-layout'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { GetDemosComponent } from './components/get-demos/get-demos.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { GetCustomersComponent } from './components/get-customers/get-customers.component';
import { DemoDetailsComponent } from './components/demo-details/demo-details.component';
import { DemoDetailDialogComponent } from './components/demo-detail-dialog/demo-detail-dialog.component';
import { GetDemosDialogComponent } from './components/get-demos-dialog/get-demos-dialog.component';
import { AutosizeModule } from 'ngx-autosize';

const appRoutes: Routes = [
  { path: 'new-customer', component: NewCustomerComponent },
  { path: 'lookup-customer', component: LookupCustomerComponent },
  { path: 'new-rent/', component: NewRentComponent },
  { path: 'new-rent/:id', component: NewRentComponent },
  { path: 'get-demos', component: GetDemosComponent },
  { path: 'get-customers', component: GetCustomersComponent },
  { path: 'demo-details/:id', component: DemoDetailsComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AutosizeModule
  ],
  entryComponents: [
    DemoDetailDialogComponent,
    GetDemosDialogComponent
  ],
  declarations: [
    AppComponent,
    NewCustomerComponent,
    LookupCustomerComponent,
    NewRentComponent,
    GetDemosComponent,
    GetCustomersComponent,
    DemoDetailsComponent,
    DemoDetailDialogComponent,
    GetDemosDialogComponent],
  bootstrap: [AppComponent],
  providers: [
    CustomerService
  ]
})
export class AppModule { }
