import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Change } from '../change';

@Component({
    selector: 'app-repairs',
    templateUrl: './repairs.component.html',
    styleUrls: ['./repairs.component.css']
})
export class RepairsComponent implements OnInit, OnChanges {

    @Input() resetCount: number;
    @Output() changedSubtotal = new EventEmitter<Change>();

    subtotal: number = 0;
    internalResetCount: number;

    constructor() { }

    ngOnInit(): void {
        this.internalResetCount = this.resetCount;
    }

    ngOnChanges(): void {
        if (this.resetCount != this.internalResetCount) {
            this.internalResetCount = this.resetCount;
            this.subtotal = 0;
        }
    }

    onCountChange(newCount: number) {
        let old = this.subtotal
        this.subtotal = newCount;
        this.changedSubtotal.emit({
            old: old,
            current: this.subtotal
        })
    }
}
