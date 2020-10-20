import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  private URL = "vehicles"; 

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
}
