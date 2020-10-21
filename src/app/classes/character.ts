import { Film } from './film';
import { Planet } from './planet';
import { Specie } from './specie';
import { Starship } from './starship';
import { Vehicle } from './vehicle';

export class Character {

    private _name: string;
    public get name(): string {
        return this._name;
    }


    private _height: string;
    public get height(): string {
        return this._height;
    }


    private _mass: string;
    public get mass(): string {
        return this._mass;
    }


    private _hair_color: string;
    public get hair_color(): string {
        return this._hair_color;
    }


    private _skin_color: string;
    public get skin_color(): string {
        return this._skin_color;
    }


    private _eye_color: string;
    public get eye_color(): string {
        return this._eye_color;
    }


    private _birth_year: string;
    public get birth_year(): string {
        return this._birth_year;
    }


    private _gender: string;
    public get gender(): string {
        return this._gender;
    }


    private _homeworld: Planet;
    public get homeworld(): Planet {
        return this._homeworld;
    }


    private _films: Film[];
    public get films(): Film[] {
        return this._films;
    }
    public set films(v: Film[]) {
        this._films = v;
    }


    private _species: Specie[];
    public get species(): Specie[] {
        return this._species;
    }
    public set species(v: Specie[]) {
        this._species = v;
    }


    private _vehicles: Vehicle[];
    public get vehicles(): Vehicle[] {
        return this._vehicles;
    }
    public set vehicles(v: Vehicle[]) {
        this._vehicles = v;
    }


    private _starships: Starship[];
    public get starships(): Starship[] {
        return this._starships;
    }
    public set starships(v: Starship[]) {
        this._starships = v;
    }


    private _url: string;
    public get url(): string {
        return this._url;
    }

}

