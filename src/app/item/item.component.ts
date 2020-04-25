import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Change } from '../change';
import { Unit } from '../unit';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

    @Input() unit: Unit;
    @Output() change = new EventEmitter<Change>();

    subtotal: number = 0;

    constructor() { }

    ngOnInit(): void {
    }

    onCountChange(newCount: number) {
        alert(`New count: ${newCount}`);
    }

}
