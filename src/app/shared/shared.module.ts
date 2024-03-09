import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeLetterPipe } from './pipes/change-letter.pipe';

@NgModule({
  declarations: [ChangeLetterPipe],
  imports: [CommonModule],
  exports: [ChangeLetterPipe],
})
export class SharedModule {}
