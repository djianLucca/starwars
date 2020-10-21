import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Specie } from 'src/app/classes/specie';
import { FilmsService } from 'src/app/services/films.service';
import { PeopleService } from 'src/app/services/people.service';
import { PlanetsService } from 'src/app/services/planets.service';
import { SpeciesService } from 'src/app/services/species.service';

@Component({
  selector: 'app-species-details',
  templateUrl: './species-details.component.html',
  styleUrls: ['./species-details.component.scss']
})
export class SpeciesDetailsComponent implements OnInit {

  public specie: Specie
  public specieImage: string

  constructor(
    private _activatedRouter: ActivatedRoute,
    private _charactersService: PeopleService,
    private _filmsService: FilmsService,
    private _speciesService: SpeciesService,
    private _planetsService: PlanetsService,
  ) { }

  ngOnInit(): void {
    this.getSpecie()
  }

  getSpecie() {
    this._activatedRouter.params.subscribe((params: any) => {
      let specieId = params['id']
      if (specieId) {
        this._speciesService.getById(specieId)
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
            res.people.map(charactersUrl => {
              let charactersId = charactersUrl.replace(/[^0-9]/g, '')
              return this._charactersService.getById(charactersId).subscribe((characters: any) => {
                characters.url = '/characters/details/' + charactersId
                allCharacters.push(characters)
              })
            })

            res.films = allFilms 
            res.characters = allCharacters

            let homeworldId = res.homeworld.replace(/[^0-9]/g, '')
            this._planetsService.getById(homeworldId).subscribe((planet: any) => {
              res.homeworld = planet
              res.homeworld.url = '/planets/details/' + homeworldId
            })
            this.setSpeciePicture(res.url)

            this.specie = res
          })
      }
    })
  }

  setSpeciePicture(url) {
    let specieId = url.replace(/[^0-9]/g, '')
    this.specieImage =  `./assets/img/species/${specieId}.jpg`
  }

}
