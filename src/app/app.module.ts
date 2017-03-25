import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {FwModule} from "../fw/fw.module";
import {FramewokConfigService} from "../fw/services/framewok-config.service";
import {TopBarComponent} from '../fw/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    FormsModule,
    HttpModule,
    FwModule
  ],
  providers   : [
    FramewokConfigService,
  ],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
