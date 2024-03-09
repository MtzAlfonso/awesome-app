import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ChangeNameDialogData } from '../../interfaces/change-name.interface';

@Component({
  selector: 'app-name-modal',
  templateUrl: './name-modal.component.html',
})
export class NameModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<NameModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ChangeNameDialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log('NameModalComponent initialized');
  }
}
