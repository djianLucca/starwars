import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planet } from 'src/app/classes/planet';
import { FilmsService } from 'src/app/services/films.service';
import { PeopleService } from 'src/app/services/people.service';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'app-planets-details',
  templateUrl: './planets-details.component.html',
  styleUrls: ['./planets-details.component.scss']
})
export class PlanetsDetailsComponent implements OnInit {

  public planet: Planet
  public planetImage: string

  constructor(
    private _activatedRouter: ActivatedRoute,
    private _charactersService: PeopleService,
    private _filmsService: FilmsService,
    private _planetsService: PlanetsService,
  ) { }

  ngOnInit(): void {
    this.getPlanet()
  }

  getPlanet() {
    this._activatedRouter.params.subscribe((params: any) => {
      let planet = params['id']
      if (planet) {
        this._planetsService.getById(planet)
          .subscribe((res: any) => {
            let allFilms = [];
            let allCharacters = [];

            res.films.map(filmUrl => {
              let filmId = filmUrl.replace(/[^0-9]/g, '')
              this._filmsService.getById(filmId).subscribe((film: any) => {
                film.url = '/films/details/' + filmId
                allFilms.push(film)
              })
            })
            res.residents.map(characterUrl => {
              let characterId = characterUrl.replace(/[^0-9]/g, '')
              return this._charactersService.getById(characterId).subscribe((character: any) => {
                character.url = '/characters/details/' + characterId
                allCharacters.push(character)
              })
            })

            res.films = allFilms 
            res.characters = allCharacters 

            this.setPlanetPicture(res.url)

            this.planet = res
          })
      }
    })
  }

  setPlanetPicture(url) {
    let planet = url.replace(/[^0-9]/g, '')
    this.planetImage =  `./assets/img/planets/${planet}.jpg`
  }

}
