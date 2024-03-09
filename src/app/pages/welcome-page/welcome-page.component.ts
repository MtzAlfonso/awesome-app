import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NameModalComponent } from './components/name-modal/name-modal.component';

@Component({
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
})
export class WelcomePageComponent implements OnInit {
  name: string;

  constructor(public dialog: MatDialog) {
    this.name = '';
  }

  ngOnInit(): void {
    console.log('WelcomePageComponent initialized');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NameModalComponent, {
      maxWidth: '400px',
      data: { name: this.name },
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      this.name = result;
    });
  }
}
