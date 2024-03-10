import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
})
export class LogoutModalComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly dialogRef: MatDialogRef<LogoutModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log('LogoutModalComponent initialized');
  }

  logout() {
    this.authService.logout();
    this.dialogRef.close();
  }
}
