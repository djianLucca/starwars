import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/classes/film';
import { FilmsService } from 'src/app/services/films.service';
import { PeopleService } from 'src/app/services/people.service';
import { PlanetsService } from 'src/app/services/planets.service';
import { SpeciesService } from 'src/app/services/species.service';
import { StarshipsService } from 'src/app/services/starships.service';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html',
  styleUrls: ['./films-details.component.scss']
})
export class FilmsDetailsComponent implements OnInit {

  public film: Film
  public filmImage: string

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
    this.getFilm()
  }

  getFilm() {
    this._activatedRouter.params.subscribe((params: any) => {
      let filmId = params['id']
      if (filmId) {
        this._filmsService.getById(filmId)
          .subscribe((res: any) => {
            let allCharacters = [];
            let allSpecies = [];
            let allStarships = [];
            let allVehicles = [];
            let allPlanets = [];

            res.characters.map(characterUrl => {
              let characterId = characterUrl.replace(/[^0-9]/g, '')
              this._charactersService.getById(characterId).subscribe((character: any) => {
                character.url = '/characters/details/' + characterId
                allCharacters.push(character)
              })
            })
            res.species.map(specieUrl => {
              let specieId = specieUrl.replace(/[^0-9]/g, '')
              return this._speciesService.getById(specieId).subscribe((specie: any) => {
                specie.url = '/species/details/' + specieId
                allSpecies.push(specie)
              })
            })
            res.starships.map(starshipUrl => {
              let starshipId = starshipUrl.replace(/[^0-9]/g, '')
              return this._starshipsService.getById(starshipId).subscribe((starship: any) => {
                starship.url = '/starships/details/' + starshipId
                allStarships.push(starship)
              })
            })
            res.vehicles.map(vehicleUrl => {
              let vehicleId = vehicleUrl.replace(/[^0-9]/g, '')
              return this._vehiclesService.getById(vehicleId).subscribe((vehicle: any) => {
                vehicle.url = '/vehicles/details/' + vehicleId
                allVehicles.push(vehicle)
              })
            })
            res.planets.map(planetUrl => {
              let planetId = planetUrl.replace(/[^0-9]/g, '')
              return this._planetsService.getById(planetId).subscribe((planet: any) => {
                planet.url = '/planets/details/' + planetId
                allPlanets.push(planet)
              })
            })

            res.characters = allCharacters 
            res.species = allSpecies 
            res.starships = allStarships 
            res.vehicles = allVehicles 
            res.planets = allPlanets 

            this.setFilmPicture(res.url)

            this.film = res
          })
      }
    })
  }

  setFilmPicture(url) {
    let filmId = url.replace(/[^0-9]/g, '')
    this.filmImage =  `./assets/img/films/${filmId}.jpg`
  }

}
