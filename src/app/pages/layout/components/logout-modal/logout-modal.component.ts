import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
})
export class LogoutModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<LogoutModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log('LogoutModalComponent initialized');
  }
}
