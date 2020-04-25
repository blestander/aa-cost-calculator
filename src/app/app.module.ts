import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VersionSelectorComponent } from './version-selector/version-selector.component';
import { CostCalculatorComponent } from './cost-calculator/cost-calculator.component';

@NgModule({
    declarations: [
        AppComponent,
        VersionSelectorComponent,
        CostCalculatorComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
