import {Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SettingsComponent} from "./settings/settings.component";
import {CountryDetailComponent} from "./country-detail/country-detail.component";
import {CountryMaintComponent} from "./country-maint/country-maint.component";
import {CountriesListComponent} from "./countries-list/countries-list.component";

export const appRoutes: Routes = [
  {path: 'signin', component: SignInComponent},
  {
    path    : 'authenticated', component: AuthenticationComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'country-list/:count', component: CountriesListComponent},
      {path: 'country-detail/:country', component: CountryDetailComponent},
      {path: 'conutry-maint', component: CountryMaintComponent},
      {path: 'settings', component: SettingsComponent},
      {path: '', component: DashboardComponent},
      {path: '**', component: DashboardComponent}
    ]},
  {path: '', component: SignInComponent },
  { path: '**', component: SignInComponent }
  ];

