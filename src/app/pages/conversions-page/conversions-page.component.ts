import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ViewService } from 'src/app/services/view.service';

@Component({
  templateUrl: './conversions-page.component.html',
  styles: [],
})
export class ConversionsPageComponent implements OnInit, OnDestroy {
  private onDestroy$ = new Subject<void>();
  title: string = '';

  constructor(
    private readonly viewService: ViewService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.viewService.changeTitle('Conversiones');

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
}
