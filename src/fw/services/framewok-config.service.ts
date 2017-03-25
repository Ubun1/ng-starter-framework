import {Injectable} from '@angular/core';

@Injectable()
export class FramewokConfigService {
  config: ConfigModel;

  constructor() {
    this.config = {
      showLanguageSelector   : true,
      showStatusBarBreakpoint: 0,
      showStatusbar          : true,
      showUserControls       : true,
      socialIcons            : [{}]
    };
  }

  configure(settings: ConfigModel): void {
    this.config = Object.assign(this.config, settings)
  }
}

export interface ConfigModel {
  showLanguageSelector?: boolean;
  showUserControls?: boolean;
  showStatusbar?: boolean;
  showStatusBarBreakpoint?: number;
  socialIcons?: Array<IconFiles>;
}

export interface  IconFiles {
  imageFile: string,
  alt: string,
  link: string,
}
