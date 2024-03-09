import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogoutModalComponent } from './components/logout-modal/logout-modal.component';
import { ViewService } from 'src/app/services/view.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-pages-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class PagesLayoutComponent implements OnInit, OnDestroy {
  private onDestroy$ = new Subject<void>();

  title: string = '';

  constructor(
    private readonly viewService: ViewService,
    private readonly dialog: MatDialog,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.viewService.title$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(title => {
        if (!title) return;
        this.title = title;
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
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
