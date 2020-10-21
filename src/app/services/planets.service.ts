import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  private URL = "planets"; 

  constructor(private _baseService: BaseService) { }

  getAll() {
    return this._baseService.getAll(this.URL)
  }

  getById(id) {
    return this._baseService.get(this.URL, id)
  }

  search(terms) {
    return this._baseService.search(this.URL, terms)
  }

  page(pageNumber) {
    return this._baseService.page(this.URL, pageNumber)
  }
}
