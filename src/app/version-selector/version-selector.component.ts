import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-version-selector',
    templateUrl: './version-selector.component.html',
    styleUrls: ['./version-selector.component.css']
})
export class VersionSelectorComponent implements OnInit {

    versionControl = new FormControl('')

    constructor() { }

    ngOnInit(): void {
    }

}
