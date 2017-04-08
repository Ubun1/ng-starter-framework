import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {FwModule} from "../fw/fw.module";
import {FramewokConfigService} from "../fw/services/framewok-config.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    CountryDetailComponent,
    CountryMaintComponent,
    AuthenticatedUserComponent,
  ],
  imports     : [
    BrowserModule,
    FormsModule,
    HttpModule,
    FwModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers   : [
    FramewokConfigService,
  ],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
