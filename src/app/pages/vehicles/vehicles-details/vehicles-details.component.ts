import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from 'src/app/classes/vehicle';
import { FilmsService } from 'src/app/services/films.service';
import { PeopleService } from 'src/app/services/people.service';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-vehicles-details',
  templateUrl: './vehicles-details.component.html',
  styleUrls: ['./vehicles-details.component.scss']
})
export class VehiclesDetailsComponent implements OnInit {

  public vehicle: Vehicle
  public vehicleImage: string

  constructor(
    private _activatedRouter: ActivatedRoute,
    private _charactersService: PeopleService,
    private _filmsService: FilmsService,
    private _vehiclesService: VehiclesService,
  ) { }

  ngOnInit(): void {
    this.getVehicle()
  }

  getVehicle() {
    this._activatedRouter.params.subscribe((params: any) => {
      let vehicleId = params['id']
      if (vehicleId) {
        this._vehiclesService.getById(vehicleId)
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
            res.pilots.map(characterUrl => {
              let characterId = characterUrl.replace(/[^0-9]/g, '')
              return this._charactersService.getById(characterId).subscribe((character: any) => {
                character.url = '/characters/details/' + characterId
                allCharacters.push(character)
              })
            })

            res.films = allFilms 
            res.pilots = allCharacters 

            this.setVehiclePicture(res.url)

            this.vehicle = res
          })
      }
    })
  }

  setVehiclePicture(url) {
    let vehicleId = url.replace(/[^0-9]/g, '')
    this.vehicleImage =  `./assets/img/vehicles/${vehicleId}.jpg`
  }

}
