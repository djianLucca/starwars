import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BaseService {

    private _urlServico: string = 'https://swapi.dev/api';

    constructor(private httpClient: HttpClient) { }

    get<Object>(url: string, id: string): Observable<Object> {
        let headers = new HttpHeaders();
        headers.set('Content-Security-Policy', 'upgrade-insecure-requests')
        return this.httpClient.get<Object>(this._urlServico + "/" + url + "/" + id, {headers: headers});
    }

    getAll<Object>(url: string): Observable<Object[]> {
        let headers = new HttpHeaders();
        headers.set('Content-Security-Policy', 'upgrade-insecure-requests')
        return this.httpClient.get<Object[]>(this._urlServico + "/" + url, {headers: headers});
    }

    search<Object>(url: string, search: string): Observable<Object> {
        let headers = new HttpHeaders();
        headers.set('Content-Security-Policy', 'upgrade-insecure-requests')
        return this.httpClient.get<Object>(this._urlServico + "/" + url + "/?search=" + search, {headers: headers});
    }

    page<Object>(url: string, pageNumber: number): Observable<Object> {
        let headers = new HttpHeaders();
        headers.set('Content-Security-Policy', 'upgrade-insecure-requests')
        return this.httpClient.get<Object>(this._urlServico + "/" + url + "/?page=" + pageNumber, {headers: headers});
    }

}