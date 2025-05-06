import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { SettingsModule } from './modules/settings/settings.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './modules/dashboard/components/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    DashboardModule,
    TransactionsModule,
    SettingsModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
