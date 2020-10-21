import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Starship } from 'src/app/classes/starship';
import { FilmsService } from 'src/app/services/films.service';
import { PeopleService } from 'src/app/services/people.service';
import { StarshipsService } from 'src/app/services/starships.service';

@Component({
  selector: 'app-starships-details',
  templateUrl: './starships-details.component.html',
  styleUrls: ['./starships-details.component.scss']
})
export class StarshipsDetailsComponent implements OnInit {

  public starship: Starship
  public starshipImage: string

  constructor(
    private _activatedRouter: ActivatedRoute,
    private _charactersService: PeopleService,
    private _filmsService: FilmsService,
    private _starshipsService: StarshipsService,
  ) { }

  ngOnInit(): void {
    this.getStarship()
  }

  getStarship() {
    this._activatedRouter.params.subscribe((params: any) => {
      let starshipId = params['id']
      if (starshipId) {
        this._starshipsService.getById(starshipId)
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
            res.characters = allCharacters 

            this.setStarshipPicture(res.url)

            this.starship = res
          })
      }
    })
  }

  setStarshipPicture(url) {
    let starshipId = url.replace(/[^0-9]/g, '')
    this.starshipImage =  `./assets/img/starships/${starshipId}.jpg`
  }
}
