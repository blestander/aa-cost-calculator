import { Injectable } from '@angular/core';

import { Unit } from './unit';

@Injectable({
    providedIn: 'root'
})
export class UnitService {

    constructor() { }

    getUnits(version: string): Unit[] {
        switch (version) {
            case "1940":
                return [
                    newUnit("Infantry", 3, 1, 2, 1),
                    newUnit("Artillery", 4, 2, 2, 1),
                    newUnit("Mechanized Infantry", 4, 1, 2, 2),
                    newUnit("Tank", 6, 3, 3, 2),
                    newUnit("AAA (Antiaircraft Artillery)", 5, 0, 0, 1),
                    newUnit("Fighter", 10, 3, 4, 4),
                    newUnit("Tactical Bomber", 11, 3, 3, 4),
                    newUnit("Strategic Bomber", 12, 4, 1, 6),
                    newUnit("Battleship", 20, 4, 4, 2),
                    newUnit("Aircraft Carrier", 16, 0, 2, 2),
                    newUnit("Cruiser", 12, 3, 3, 2),
                    newUnit("Destroyer", 8, 2, 2, 2),
                    newUnit("Submarine", 6, 2, 1, 2),
                    newUnit("Tranport", 7, 0, 0, 2),
                    newUnit("Major Industrial Complex", 30, 0, 0, 0),
                    newUnit("Minor Industrial Complex", 12, 0, 0, 0),
                    newUnit("Industrial Complex Upgrade", 18, 0, 0, 0),
                    newUnit("Air Base", 15, 0, 0, 0),
                    newUnit("Sea Base", 15, 0, 0, 0)
                ];
            case "1942":
                return [
                    newUnit("Infantry", 3, 1, 2, 1),
                    newUnit("Artillery", 4, 2, 2, 1),
                    newUnit("Tank", 6, 3, 3, 2),
                    newUnit("Antiaircraft Artillery", 5, 0, 0, 1),
                    newUnit("Industrial Complex", 15, 0, 0, 0),
                    newUnit("Fighter", 10, 3, 4, 4),
                    newUnit("Bomber", 12, 4, 1, 6),
                    newUnit("Battleship", 20, 4, 4, 2),
                    newUnit("Aircraft Carrier", 14, 1, 2, 2),
                    newUnit("Cruiser", 12, 3, 3, 2),
                    newUnit("Destroyer", 8, 2, 2, 2),
                    newUnit("Submarine", 6, 2, 1, 2),
                    newUnit("Transport", 7, 0, 0, 2)
                ]
            case "1941":
                return [
                    newUnit("Infantry", 3, 1, 2, 1),
                    newUnit("Tank", 6, 3, 3, 2),
                    newUnit("Fighter", 10, 3, 3, 4),
                    newUnit("Bomber", 12, 4, 1, 6),
                    newUnit("Battleship", 16, 4, 4, 2),
                    newUnit("Aircraft Carrier", 12, 1, 2, 2),
                    newUnit("Destroyer", 8, 2, 2, 2),
                    newUnit("Submarine", 6, 2, 1, 2),
                    newUnit("Transport", 7, 0, 0, 2),
                ]
            default:
                return new Array();
        }
    }
}

function newUnit(
    name: string,
    cost: number,
    attack: number,
    defense: number,
    move: number
) : Unit {
    return {
        name: name,
        cost: cost,
        attack: attack,
        defense: defense,
        move: move
    }
}
