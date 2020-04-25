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
                    {
                        name: "Infantry",
                        cost: 3,
                        attack: 1,
                        defense: 2,
                        move: 1,
                    }, {
                        name: "Artillery",
                        cost: 4,
                        attack: 2,
                        defense: 2,
                        move: 1,
                    }, {
                        name: "Mechanized Infantry",
                        cost: 4,
                        attack: 1,
                        defense: 2,
                        move: 2,
                    }, {
                        name: "Tank",
                        cost: 6,
                        attack: 3,
                        defense: 3,
                        move: 2,
                    }, {
                        name: "AAA (Antiaircraft Artillery)",
                        cost: 5,
                        attack: 0,
                        defense: 0,
                        move: 1,
                    }, {
                        name: "Fighter",
                        cost: 10,
                        attack: 3,
                        defense: 4,
                        move: 4
                    }, {
                        name: "Tactical Bomber",
                        cost: 11,
                        attack: 3,
                        defense: 3,
                        move: 4,
                    }, {
                        name: "Strategic Bomber",
                        cost: 12,
                        attack: 4,
                        defense: 1,
                        move: 6,
                    }, {
                        name: "Battleship",
                        cost: 20,
                        attack: 4,
                        defense: 4,
                        move: 2
                    }, {
                        name: "Aircraft Carrier",
                        cost: 16,
                        attack: 0,
                        defense: 2,
                        move: 2,
                    }, {
                        name: "Cruiser",
                        cost: 12,
                        attack: 3,
                        defense: 3,
                        move: 2,
                    }, {
                        name: "Destroyer",
                        cost: 8,
                        attack: 2,
                        defense: 2,
                        move: 2
                    }, {
                        name: "Submarine",
                        cost: 6,
                        attack: 2,
                        defense: 1,
                        move: 2,
                    }, {
                        name: "Tranport",
                        cost: 7,
                        attack: 0,
                        defense: 0,
                        move: 2,
                    }, {
                        name: "Major Industrial Complex",
                        attack: 0,
                        defense: 0,
                        move: 0,
                        cost: 30,
                    }, {
                        name: "Minor Industrial Complex",
                        cost: 12,
                        attack: 0,
                        defense: 0,
                        move: 0,
                    }, {
                        name: "Industrial Complex Upgrade",
                        cost: 18,
                        attack: 0,
                        defense: 0,
                        move: 0,
                    }, {
                        name: "Air Base",
                        cost: 15,
                        attack: 0,
                        defense: 0,
                        move: 0,
                    }, {
                        name: "Sea Base",
                        cost: 15,
                        attack: 0,
                        defense: 0,
                        move: 0,
                    }
                ];
            default:
                return new Array();
        }
    }
}
