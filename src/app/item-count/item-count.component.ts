import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-item-count',
    templateUrl: './item-count.component.html',
    styleUrls: ['./item-count.component.css']
})
export class ItemCountComponent implements OnInit {

    @ViewChild("count-input") countField: ElementRef;
    @Output() changedCount = new EventEmitter<number>();

    countControl = new FormControl('');

    constructor() { }

    ngOnInit(): void {
        this.countControl.setValue(0);
    }

    focusField(): void {
        this.countField.nativeElement.focus();
    }

}
