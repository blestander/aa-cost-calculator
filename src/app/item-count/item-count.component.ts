import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Change } from '../change';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-item-count',
    templateUrl: './item-count.component.html',
    styleUrls: ['./item-count.component.css']
})
export class ItemCountComponent implements OnInit {

    @Output() change = new EventEmitter<Change>();

    countControl = new FormControl('');

    constructor() { }

    ngOnInit(): void {
    }

}
