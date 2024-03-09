import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './welcome-page.component.html',
})
export class WelcomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('WelcomePageComponent initialized');
  }
}
