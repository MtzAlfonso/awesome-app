import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewService {
  title$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {}

  changeTitle(title: string): void {
    this.title$.next(title);
  }
}
