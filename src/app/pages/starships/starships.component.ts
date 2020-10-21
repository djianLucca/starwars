import { Component, OnInit } from '@angular/core';
import { StarshipsService } from 'src/app/services/starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
  starships = []
  actualPage = 1
  totalPages

  constructor(private _starshipsService: StarshipsService) { }

  ngOnInit(): void {
    this.getStarshipsInPage(1)
  }

  getStarshipsInPage(number) {
    this._starshipsService.page(number)
      .subscribe((res: any) => {
        this.totalPages = Math.round(+res.count / 9)
        this.starships = res.results.map(starship => {
          return {
            name: starship.name,
            id: starship.url.replace(/[^0-9]/g, '')//extrating the movie id from the url since it doesn't come as part of the results
          }
        });
        this.actualPage = number
      })
  }

}
