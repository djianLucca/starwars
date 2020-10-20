import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/home",
    title: "Home",
    icon: "icon-world",
    class: ""
  },
  {
    path: "/films",
    title: "Films",
    icon: "icon-video-66",
    class: ""
  },
  {
    path: "/characters",
    title: "Characters",
    icon: "icon-single-02",
    class: "" },
  {
    path: "/planets",
    title: "Planets",
    icon: "icon-planet",
    class: ""
  },

  {
    path: "/species",
    title: "Species",
    icon: "icon-book-bookmark",
    class: ""
  },
  {
    path: "/starships",
    title: "Starships",
    icon: "icon-spaceship",
    class: ""
  },
  {
    path: "/vehicles",
    title: "Vehicles",
    icon: "icon-bus-front-12",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
