import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Change } from '../change';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

    @Input() name: string;
    @Input() cost: number;
    @Input() attack: number;
    @Input() defend: number;
    @Output() change = new EventEmitter<Change>();

    constructor() { }

    ngOnInit(): void {
    }

}
