import { Character } from './character';
import { Film } from './film';

export class Vehicle {

    private _name: string;
    public get name(): string {
        return this._name;
    }

    private _model: string;
    public get model(): string {
        return this._model;
    }

    private _manufacturer: string;
    public get manufacturer(): string {
        return this._manufacturer;
    }

    private _cost_in_credits: string;
    public get cost_in_credits(): string {
        return this._cost_in_credits;
    }

    private _length: string;
    public get length(): string {
        return this._length;
    }

    private _max_atmosphering_speed: string;
    public get max_atmosphering_speed(): string {
        return this._max_atmosphering_speed;
    }

    private _crew: string;
    public get crew(): string {
        return this._crew;
    }

    private _passengers: string;
    public get passengers(): string {
        return this._passengers;
    }

    private _cargo_capacity: string;
    public get cargo_capacity(): string {
        return this._cargo_capacity;
    }

    private _consumables: string;
    public get consumables(): string {
        return this._consumables;
    }

    private _vehicle_class: string;
    public get vehicle_class(): string {
        return this._vehicle_class;
    }

    private _pilots: Character[];
    public get pilots(): Character[] {
        return this._pilots;
    }
    public set pilots(v: Character[]) {
        this._pilots = v;
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
