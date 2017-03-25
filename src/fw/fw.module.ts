import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FrameworkBodyComponent} from "./framework-body/framework-body.component";
import {ContentComponent} from "./content/content.component";
import {TitleBarComponent} from "./title-bar/title-bar.component";
import {FramewokConfigService} from "./services/framewok-config.service";
import {TopBarComponent} from "./top-bar/top-bar.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
  ],
  exports: [
    FrameworkBodyComponent
  ],
  providers: [
    FramewokConfigService,
  ]
})
export class FwModule { }
