import { Component, OnChanges, Input } from '@angular/core';

import { Change } from '../change';
import { Unit } from '../unit';
import { UnitService } from '../unit.service';

@Component({
    selector: 'app-cost-calculator',
    templateUrl: './cost-calculator.component.html',
    styleUrls: ['./cost-calculator.component.css']
})
export class CostCalculatorComponent implements OnChanges {

    @Input() version: string;
    units: Unit[];

    total: number = 0;

    constructor(private unitService: UnitService) { }

    ngOnChanges(): void {
        this.units = this.unitService.getUnits(this.version);
    }

    onSubtotalChange(change: Change) {
        this.total = this.total - change.old + change.current;
    }

    reset() {
        this.total = 0;
    }
}
