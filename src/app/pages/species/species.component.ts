import { Component, OnInit } from '@angular/core';
import { SpeciesService } from 'src/app/services/species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {
  species = []
  actualPage = 1
  totalPages

  constructor(private _speciesService: SpeciesService) { }

  ngOnInit(): void {
    this.getSpeciesInPage(1)
  }

  getSpeciesInPage(number) {
    this._speciesService.page(number)
      .subscribe((res: any) => {
        this.totalPages = Math.round(+res.count / 9)
        this.species = res.results.map(specie => {
          return {
            name: specie.name,
            id: specie.url.replace(/[^0-9]/g, '')//extrating the movie id from the url since it doesn't come as part of the results
          }
        });
        this.actualPage = number
      })
  }

}
