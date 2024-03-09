import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './form-page.component.html',
  styles: [],
})
export class FormPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('FormPageComponent initialized');
  }
}
