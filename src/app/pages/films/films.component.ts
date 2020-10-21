import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  films = []

  constructor(private _filmsService: FilmsService) { }

  ngOnInit(): void {
    this._filmsService.page(1)
      .subscribe((res: any) => {
        this.films = res.results.map( film => {
          return {
            title: film.title,
            id: film.url.replace(/[^0-9]/g, '') //extrating the movie id from the url since it doesn't come as part of the results
          }
        });
      })
  }

}
