import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VersionSelectorComponent } from './version-selector/version-selector.component';
import { CostCalculatorComponent } from './cost-calculator/cost-calculator.component';
import { ItemComponent } from './item/item.component';
import { ItemAttributeComponent } from './item-attribute/item-attribute.component';
import { ItemCountComponent } from './item-count/item-count.component';
import { TotalComponent } from './total/total.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RepairsComponent } from './repairs/repairs.component';

@NgModule({
    declarations: [
        AppComponent,
        VersionSelectorComponent,
        CostCalculatorComponent,
        ItemComponent,
        ItemAttributeComponent,
        ItemCountComponent,
        TotalComponent,
        HeaderComponent,
        FooterComponent,
        RepairsComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
