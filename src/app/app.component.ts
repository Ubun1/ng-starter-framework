import {Component} from '@angular/core';
import {ConfigModel, FramewokConfigService} from "../fw/services/framewok-config.service";

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private configService: FramewokConfigService) {
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
  }
}
