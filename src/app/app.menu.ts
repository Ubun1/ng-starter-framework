import {MenuItem} from "../fw/services/menu.service";
const countries: Array<MenuItem> = [
  {
    text   : 'USA',
    icon   : 'glyphicon-flag',
    route  : 'country-detail/USA',
    submenu: null
  },
  {
    text   : 'India',
    icon   : 'glyphicon-flag',
    route  : 'country-details/India',
    submenu: null
  },
  {
    text   : 'Switzerland',
    icon   : 'glyphicon-flag',
    route  : 'country-detail/Switzerland',
    submenu: null
  }
];
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
    submenu: [
      {
        text: 'Select',
        icon: 'glyphicon-expand',
        route: null,
        submenu: countries
      },
      {
        text: 'Top 3',
        icon: 'glyphicon-flag',
        route: 'country-list/3',
        submenu: null
      },
      {
        text: 'Top 10',
        icon: 'glyphicon-flag',
        route: 'country-list/10',
        submenu: null
      },{
        text: 'All',
        icon: 'glyphicon-flag',
        route: 'country-list/0',
        submenu: null
      },
    ]
  },
  {
    text   : 'Maintenance',
    icon   : 'glyphicon-wrench',
    route  : null,
    submenu: [
      {
        text: 'Country list',
        icon: 'glyphicon-th-list',
        route: 'country-main',
        submenu: null
      },
      {
        text: 'settings',
        icon: 'glyphicon-cog',
        route: 'settings',
        submenu: null
      }
    ]
  }
];
