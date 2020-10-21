import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/classes/character';
import { FilmsService } from 'src/app/services/films.service';
import { PeopleService } from 'src/app/services/people.service';
import { PlanetsService } from 'src/app/services/planets.service';
import { SpeciesService } from 'src/app/services/species.service';
import { StarshipsService } from 'src/app/services/starships.service';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss']
})
export class CharactersDetailsComponent implements OnInit {

  public character: Character
  public characterImage: string

  constructor(
    private _activatedRouter: ActivatedRoute,
    private _charactersService: PeopleService,
    private _filmsService: FilmsService,
    private _speciesService: SpeciesService,
    private _starshipsService: StarshipsService,
    private _vehiclesService: VehiclesService,
    private _planetsService: PlanetsService,
  ) { }

  ngOnInit(): void {
    this.getCharacter()
  }

  getCharacter() {
    this._activatedRouter.params.subscribe((params: any) => {
      console.log(params)
      let charId = params['id']
      if (charId) {
        this._charactersService.getById(charId)
          .subscribe((res: any) => {
            let allFilms = [];
            let allSpecies = [];
            let allStarships = [];
            let allVehicles = [];

            res.films.map(filmUrl => {
              let filmId = filmUrl.replace(/[^0-9]/g, '')
              this._filmsService.getById(filmId).subscribe((film: any) => {
                film.url = '/films/details/' + film.url.replace(/[^0-9]/g, '')
                allFilms.push(film)
              })
            })
            res.species.map(specieUrl => {
              let specieId = specieUrl.replace(/[^0-9]/g, '')
              return this._speciesService.getById(specieId).subscribe((specie: any) => {
                specie.url = '/species/details/' + specie.url.replace(/[^0-9]/g, '')
                allSpecies.push(specie)
              })
            })
            res.starships.map(starshipUrl => {
              let starshipId = starshipUrl.replace(/[^0-9]/g, '')
              return this._starshipsService.getById(starshipId).subscribe((starship: any) => {
                starship.url = '/starships/details/' + starship.url.replace(/[^0-9]/g, '')
                allStarships.push(starship)
              })
            })
            res.vehicles.map(vehicleUrl => {
              let vehicleId = vehicleUrl.replace(/[^0-9]/g, '')
              return this._vehiclesService.getById(vehicleId).subscribe((vehicle: any) => {
                vehicle.url = '/vehicles/details/' + vehicle.url.replace(/[^0-9]/g, '')
                allVehicles.push(vehicle)
              })
            })

            res.films = allFilms 
            res.species = allSpecies 
            res.starships = allStarships 
            res.vehicles = allVehicles 

            let homeworldId = res.homeworld.replace(/[^0-9]/g, '')
            this._planetsService.getById(homeworldId).subscribe((planet: any) => {
              res.homeworld = planet
              res.homeworld.url = '/planets/details/' + planet.url.replace(/[^0-9]/g, '')
            })
            this.setCharacterPicture(res.url)

            this.character = res
          })
      }
    })
  }

  setCharacterPicture(url) {
    let charId = url.replace(/[^0-9]/g, '')
    this.characterImage =  `./assets/img/characters/${charId}.jpg`
  }
}
