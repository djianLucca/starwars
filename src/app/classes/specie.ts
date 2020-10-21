import { Character } from './character';
import { Film } from './film';

export class Specie {

    private _name: string;
    public get name(): string {
        return this._name;
    }

    private _classification: string;
    public get classification(): string {
        return this._classification;
    }

    private _designation: string;
    public get designation(): string {
        return this._designation;
    }

    private _average_height: string;
    public get average_height(): string {
        return this._average_height;
    }

    private _average_lifespan: string;
    public get average_lifespan(): string {
        return this._average_lifespan;
    }

    private _hair_colors: string;
    public get hair_colors(): string {
        return this._hair_colors;
    }

    private _skin_colors: string;
    public get skin_colors(): string {
        return this._skin_colors;
    }

    private _eye_colors: string;
    public get eye_colors(): string {
        return this._eye_colors;
    }

    private _homeworld: string;
    public get homeworld(): string {
        return this._homeworld;
    }

    private _language: string;
    public get language(): string {
        return this._language;
    }

    private _people: Character[];
    public get people(): Character[] {
        return this._people;
    }
    public set people(v: Character[]) {
        this._people = v;
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
