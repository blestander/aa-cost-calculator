import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Axis & Allies Cost Calculator';

    version: string = null;

    onVersionChange(newVersion: string) {
        this.version = newVersion;
    }
}
