import { Character } from './character';
import { Film } from './film';

export class Planet {

    private _name: string;
    public get name(): string {
        return this._name;
    }

    private _rotation_period: string;
    public get rotation_period(): string {
        return this._rotation_period;
    }

    private _orbital_period: string;
    public get orbital_period(): string {
        return this._orbital_period;
    }

    private _diameter: string;
    public get diameter(): string {
        return this._diameter;
    }

    private _climate: string;
    public get climate(): string {
        return this._climate;
    }

    private _gravity: string;
    public get gravity(): string {
        return this._gravity;
    }

    private _terrain: string;
    public get terrain(): string {
        return this._terrain;
    }

    private _surface_water: string;
    public get surface_water(): string {
        return this._surface_water;
    }

    private _population: string;
    public get population(): string {
        return this._population;
    }

    private _residents: Character[];
    public get residents(): Character[] {
        return this._residents;
    }
    public set residents(v: Character[]) {
        this._residents = v;
    }

    private _films: Film[];
    public get films(): Film[] {
        return this._films;
    }
    public set films(v: Film[]) {
        this._films = v;
    }

    private _url: string;
    public get url(): string {
        return this._url;
    }
}
