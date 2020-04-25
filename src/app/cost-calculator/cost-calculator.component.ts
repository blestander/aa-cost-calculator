import { Component, OnInit, Input } from '@angular/core';

import { Unit } from '../unit';
import { UnitService } from '../unit.service';

@Component({
    selector: 'app-cost-calculator',
    templateUrl: './cost-calculator.component.html',
    styleUrls: ['./cost-calculator.component.css']
})
export class CostCalculatorComponent implements OnInit {

    @Input() version: string;
    units: Unit[];

    total: number = 0;

    constructor(private unitService: UnitService) { }

    ngOnInit(): void {
        this.units = this.unitService.getUnits(this.version);
    }

}
