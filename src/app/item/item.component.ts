import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { Change } from '../change';
import { Unit } from '../unit';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {

    @Input() unit: Unit;
    @Input() resetCount: number;
    @Output() changedSubtotal = new EventEmitter<Change>();

    subtotal: number = 0;
    internalResetCount: number;

    constructor() { }

    ngOnInit(): void {
        this.internalResetCount = this.resetCount;
    }

    ngOnChanges() {
        if (this.resetCount != this.internalResetCount) {
            this.internalResetCount = this.resetCount;
            this.subtotal = 0;
        }
    }

    onCountChange(newCount: number) {
        let old = this.subtotal
        this.subtotal = newCount * this.unit.cost;
        this.changedSubtotal.emit({
            old: old,
            current: this.subtotal
        })
    }

}
