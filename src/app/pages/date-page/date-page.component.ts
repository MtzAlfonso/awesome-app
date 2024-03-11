import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ViewService } from 'src/app/services/view.service';
import { CalcDateUnits } from './enums/calc-date-units.enum';

@Component({
  templateUrl: './date-page.component.html',
  styleUrls: ['./date-page.component.css'],
})
export class DatePageComponent implements OnInit {
  constructor(private viewService: ViewService) {}

  date?: Date;
  unit?: CalcDateUnits;
  num?: number;
  result?: Date;
  UNITS = CalcDateUnits;

  ngOnInit(): void {
    this.viewService.changeTitle('Calcular fecha');
  }

  addEvent(event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
    if (event.value) this.date = event.value;
  }

  calculate() {
    if (!this.date || !this.unit || !this.num) return;

    this.result = new Date(this.date);

    switch (this.unit) {
      case CalcDateUnits.DAYS:
        this.result.setDate(this.result.getDate() + this.num);
        break;
      case CalcDateUnits.MONTHS:
        this.result.setMonth(this.result.getMonth() + this.num);
        break;
      case CalcDateUnits.YEARS:
        this.result.setFullYear(this.result.getFullYear() + this.num);
        break;
      default:
        break;
    }
  }

  reset() {
    this.date = undefined;
    this.unit = undefined;
    this.num = undefined;
    this.result = undefined;
  }
}
