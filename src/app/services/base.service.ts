import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BaseService {

    private _urlServico: string = 'https://swapi.dev/api';

    constructor(private httpClient: HttpClient) { }

    get<Object>(url: string, id: string): Observable<Object> {
        return this.httpClient.get<Object>(this._urlServico + "/" + url + "/" + id);
    }

    search<Object>(url: string, search: string): Observable<Object> {
        return this.httpClient.get<Object>(this._urlServico + "/" + url + "/?search=" + search);
    }

    getAll<Object>(url: string): Observable<Object[]> {
        return this.httpClient.get<Object[]>(this._urlServico + "/" + url);
    }

}