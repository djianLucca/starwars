import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters = []
  actualPage = 1
  totalPages

  constructor(private _charactersService: PeopleService) { }

  ngOnInit(): void {
    this.getCharactersInPage(1)
  }

  getCharactersInPage(number) {
    this._charactersService.page(number)
      .subscribe((res: any) => {
        this.totalPages = Math.round(+res.count / 9)
        this.characters = res.results.map(char => {
          return {
            name: char.name,
            id: char.url.replace(/[^0-9]/g, '')//extrating the movie id from the url since it doesn't come as part of the results
          }
        });
        this.actualPage = number
      })
  }

}