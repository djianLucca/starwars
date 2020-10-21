import { Component, OnInit } from '@angular/core';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  vehicles = []
  actualPage = 1
  totalPages

  constructor(private _vehiclesService: VehiclesService) { }

  ngOnInit(): void {
    this.getVehiclesInPage(1)
  }

  getVehiclesInPage(number) {
    this._vehiclesService.page(number)
      .subscribe((res: any) => {
        this.totalPages = Math.round(+res.count / 9)
        this.vehicles = res.results.map(vehicle => {
          return {
            name: vehicle.name,
            id: vehicle.url.replace(/[^0-9]/g, '')//extrating the movie id from the url since it doesn't come as part of the results
          }
        });
        this.actualPage = number
      })
  }

}
