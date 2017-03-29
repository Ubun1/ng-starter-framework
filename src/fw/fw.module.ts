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
import {MenuItem, MenuService} from "./services/menu.service";
import {MenuComponent} from "./menus/menu/menu.component";
import {MenuItemComponent} from "./menus/menu-item/menu-item.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,
    ScreenLarge,
    ScreenBelowLarge,
    MenuComponent,
    MenuItemComponent,
  ],
  exports: [
    FrameworkBodyComponent
  ],
  providers: [
    FramewokConfigService,
    ScreenService,
    MenuService,
  ]
})
export class FwModule { }
