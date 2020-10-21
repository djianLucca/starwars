import { Character } from './character';
import { Planet } from './planet';
import { Specie } from './specie';
import { Starship } from './starship';
import { Vehicle } from './vehicle';

export class Film {

    private _title: string;
    public get title(): string {
        return this._title;
    }

    private _episode_id: number;
    public get episode_id(): number {
        return this._episode_id;
    }

    private _opening_crawl: string;
    public get opening_crawl(): string {
        return this._opening_crawl;
    }

    private _director: string;
    public get director(): string {
        return this._director;
    }

    private _producer: string;
    public get producer(): string {
        return this._producer;
    }

    private _release_date: string;
    public get release_date(): string {
        return this._release_date;
    }

    private _characters: Character[];
    public get characters(): Character[] {
        return this._characters;
    }
    public set characters(v: Character[]) {
        this._characters = v;
    }

    private _planets: Planet[];
    public get planets(): Planet[] {
        return this._planets;
    }
    public set planets(v: Planet[]) {
        this._planets = v;
    }

    private _starships: Starship[];
    public get starships(): Starship[] {
        return this._starships;
    }
    public set starships(v: Starship[]) {
        this._starships = v;
    }

    private _vehicles: Vehicle[];
    public get vehicles(): Vehicle[] {
        return this._vehicles;
    }
    public set vehicles(v: Vehicle[]) {
        this._vehicles = v;
    }

    private _species: Specie[];
    public get species(): Specie[] {
        return this._species;
    }
    public set species(v: Specie[]) {
        this._species = v;
    }

    private _url: string;
    public get url(): string {
        return this._url;
    }
}
