import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VersionSelectorComponent } from './version-selector/version-selector.component';
import { CostCalculatorComponent } from './cost-calculator/cost-calculator.component';
import { ItemComponent } from './item/item.component';

@NgModule({
    declarations: [
        AppComponent,
        VersionSelectorComponent,
        CostCalculatorComponent,
        ItemComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
