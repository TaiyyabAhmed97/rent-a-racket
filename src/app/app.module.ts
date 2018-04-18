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

const appRoutes: Routes = [
  { path: 'new-customer', component: NewCustomerComponent },
  { path: 'lookup-customer', component: LookupCustomerComponent },
  { path: 'new-rent', component: NewRentComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    NewCustomerComponent,
    LookupCustomerComponent,
    NewRentComponent,
    GetDemosComponent],
  bootstrap: [AppComponent],
  providers: [CustomerService]
})
export class AppModule { }
