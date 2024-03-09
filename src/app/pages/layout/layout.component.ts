import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogoutModalComponent } from './components/logout-modal/logout-modal.component';

@Component({
  selector: 'app-pages-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class PagesLayoutComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    console.log('PagesLayoutComponent initialized');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LogoutModalComponent, {
      maxWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log({ result });
    });
  }
}
