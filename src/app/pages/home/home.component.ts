import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public menuItems = [
    {
      path: "/films",
      title: "Films",
      cover: "./assets/img/categories/films.jpg"
    },
    {
      path: "/characters",
      title: "Characters",
      cover: "./assets/img/categories/character.jpg"
    },
    {
      path: "/planets",
      title: "Planets",
      cover: "./assets/img/categories/planets.jpg"
    },

    {
      path: "/species",
      title: "Species",
      cover: "./assets/img/categories/species.jpg"
    },
    {
      path: "/starships",
      title: "Starships",
      cover: "./assets/img/categories/starships.jpg"
    },
    {
      path: "/vehicles",
      title: "Vehicles",
      cover: "./assets/img/categories/vehicles.jpg"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
