import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FrameworkBodyComponent} from "./framework-body/framework-body.component";
import {ContentComponent} from "./content/content.component";
import {TitleBarComponent} from "./title-bar/title-bar.component";
import {FramewokConfigService} from "./services/framewok-config.service";
import {TopBarComponent} from "./top-bar/top-bar.component";
import {StatusBarComponent} from "./status-bar/status-bar.component";
import {ScreenService} from "./services/screen.service";
import {ScreenLarge} from "./directives/screen-large.directive";
import {ScreenBelowLarge} from "./directives/screen-below-large.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,
    ScreenLarge,
    ScreenBelowLarge,
  ],
  exports: [
    FrameworkBodyComponent
  ],
  providers: [
    FramewokConfigService,
    ScreenService,
  ]
})
export class FwModule { }
