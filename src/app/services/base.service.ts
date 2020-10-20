import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BaseService {

    private _urlServico: string = 'https://swapi.dev/api';

    constructor(private httpClient: HttpClient) { }

    get<Object>(url: string, id: string): Observable<Object> {
        let headers = new HttpHeaders();
        return this.httpClient.get<Object>(this._urlServico + "/" + url + "/" + id, {headers: headers});
    }

    search<Object>(url: string, search: string): Observable<Object> {
        let headers = new HttpHeaders();
        return this.httpClient.get<Object>(this._urlServico + "/" + url + "/?search=" + search, {headers: headers});
    }

    getAll<Object>(url: string): Observable<Object[]> {
        let headers = new HttpHeaders();
        return this.httpClient.get<Object[]>(this._urlServico + "/" + url, {headers: headers});
    }

}