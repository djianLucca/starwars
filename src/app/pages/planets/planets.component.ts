import { Component, OnInit } from '@angular/core';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  planets = []
  actualPage = 1
  totalPages

  constructor(private _planetsService: PlanetsService) { }

  ngOnInit(): void {
    this.getPlanetsInPage(1)
  }

  getPlanetsInPage(number) {
    this._planetsService.page(number)
      .subscribe((res: any) => {
        this.totalPages = Math.round(+res.count / 9)
        this.planets = res.results.map(planet => {
          return {
            name: planet.name,
            id: planet.url.replace(/[^0-9]/g, '')//extrating the movie id from the url since it doesn't come as part of the results
          }
        });
        this.actualPage = number
      })
  }
}
