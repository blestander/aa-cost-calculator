import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-version-selector',
    templateUrl: './version-selector.component.html',
    styleUrls: ['./version-selector.component.css']
})
export class VersionSelectorComponent implements OnInit {

    @Output() changedVersion = new EventEmitter<string>();
    versionControl = new FormControl('')

    constructor() { }

    ngOnInit(): void {
    }

    onVersionSelect() {
        this.changedVersion.emit(this.versionControl.value);
    }

}
