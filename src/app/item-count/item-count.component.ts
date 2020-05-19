import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-item-count',
    templateUrl: './item-count.component.html',
    styleUrls: ['./item-count.component.css']
})
export class ItemCountComponent implements OnChanges {

    @Input() resetCount: number;
    @Output() changedCount = new EventEmitter<number>();

    countControl = new FormControl('');

    constructor() { }

    ngOnChanges(): void {
        this.countControl.setValue(0);
    }

}
