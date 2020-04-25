import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VersionSelectorComponent } from './version-selector/version-selector.component';

@NgModule({
    declarations: [
        AppComponent,
        VersionSelectorComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
