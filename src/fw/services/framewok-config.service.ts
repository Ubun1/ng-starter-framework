import {Injectable} from '@angular/core';

@Injectable()
export class FramewokConfigService {
  private _config: ConfigModel;

  get config() : ConfigModel {
    return this._config;
  }
  constructor() {
    this._config = {
      showLanguageSelector   : true,
      showStatusBarBreakpoint: 0,
      showStatusbar          : true,
      showUserControls       : true,
      socialIcons            : [
        {
          link : "facebook.com",
          alt : "no image",
          imageFile : ""
        }
      ]
    };
  }

  configure(settings: ConfigModel): void {
    this._config = Object.assign(this.config, settings)
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
