import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NameModalComponent } from './components/name-modal/name-modal.component';
import { ViewService } from 'src/app/services/view.service';

@Component({
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
})
export class WelcomePageComponent implements OnInit {
  name: string;

  constructor(
    public dialog: MatDialog,
    private readonly viewService: ViewService
  ) {
    this.name = '';
  }

  ngOnInit(): void {
    this.viewService.changeTitle('Bienvenido');
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
