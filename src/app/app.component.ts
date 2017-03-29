import {Component} from '@angular/core';
import {ConfigModel, FramewokConfigService} from "../fw/services/framewok-config.service";
import {MenuService} from "../fw/services/menu.service";
import {initialMenuItems} from "./app.menu";

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.css']
})
export class AppComponent {

  constructor(private configService: FramewokConfigService,
  private menuService: MenuService) {
    let config: ConfigModel = {
      socialIcons            : [
        {imageFile: "", alt: 'Facebook', link: "https://www.facebook.com"}
      ],
      showUserControls       : true,
      showStatusBarBreakpoint: 800,
      showLanguageSelector   : true,
      showStatusbar          : true,
    };
    configService.configure(config);

    menuService.items = initialMenuItems;
  }
}
