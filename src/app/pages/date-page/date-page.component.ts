import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './date-page.component.html',
  styles: [],
})
export class DatePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('DatePageComponent initialized');
  }
}
