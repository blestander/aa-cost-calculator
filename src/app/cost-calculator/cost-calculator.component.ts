import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-cost-calculator',
    templateUrl: './cost-calculator.component.html',
    styleUrls: ['./cost-calculator.component.css']
})
export class CostCalculatorComponent implements OnInit {

    @Input() version: string;

    constructor() { }

    ngOnInit(): void {
    }

}
