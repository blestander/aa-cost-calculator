import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-item-attribute',
    templateUrl: './item-attribute.component.html',
    styleUrls: ['./item-attribute.component.css']
})
export class ItemAttributeComponent implements OnInit {

    @Input() name: string;
    @Input() value: number;

    constructor() { }

    ngOnInit(): void {
    }

}
