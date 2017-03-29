import {MenuItem} from "../fw/services/menu.service";

export const initialMenuItems: Array<MenuItem> = [
  {
    text   : 'DashBoard',
    icon   : 'glyphicon-dashboard',
    route  : '/dashboard',
    submenu: null
  },
  {
    text   : 'Countries',
    icon   : 'glyphicon-flag',
    route  : '/countries',
    submenu: null
  },
  {
    text   : 'Settings',
    icon   : 'glyphicon-wrench',
    route  : '/settings',
    submenu: null
  }
];
