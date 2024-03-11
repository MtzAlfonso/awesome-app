import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ViewService } from 'src/app/services/view.service';
import { CustomValidator } from './validators/custom-form-validator';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css'],
})
export class FormPageComponent implements OnInit, OnDestroy {
  form: FormGroup;
  books = [];
  showBooks = false;
  civilStatusOptions = [
    { label: 'Soltero', value: 12 },
    { label: 'Casado', value: 13 },
    { label: 'Divorciado', value: 14 },
  ];

  private _onDestroy$ = new Subject<void>();

  constructor(
    private readonly viewService: ViewService,
    private readonly fb: FormBuilder,
    private readonly snackBar: MatSnackBar
  ) {
    this.form = this.buildForm();
  }

  get name() {
    return this.form.get('name');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get isSmoker() {
    return this.form.get('isSmoker');
  }

  get isReader() {
    return this.form.get('isReader');
  }

  get readedBooks(): FormArray {
    return this.form.get('readedBooks') as FormArray;
  }

  get civilStatus() {
    return this.form.get('civilStatus');
  }

  ngOnInit(): void {
    this.viewService.changeTitle('Formulario');
    this.onReaderChange();
  }

  ngOnDestroy() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  noWhiteSpaceAtEnd(control: AbstractControl): ValidationErrors | null {
    console.log('CustomFormValidator.noWhiteSpaceAtEnd');

    console.log({ control });
    const value: string = control.value;
    console.log({ value });
    if (value && value.trimEnd().length !== value.length) {
      return { noWhiteSpaceAtEnd: true };
    }
    return null;
  }

  buildForm() {
    return this.fb.group({
      name: ['', [Validators.required, CustomValidator.noWhiteSpaceAtEnd]],
      lastName: ['', [Validators.required, CustomValidator.noWhiteSpaceAtEnd]],
      isSmoker: [false, [Validators.required]],
      isReader: [false, [Validators.required]],
      readedBooks: this.fb.array([
        this.fb.group({
          bookName: [{ value: '', disabled: true }, []],
        }),
      ]),
      civilStatus: [''],
    });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.showSnackBar('❌ Formulario inválido');
      return;
    }
    console.log(this.form.value);
    this.showSnackBar('✅ Formulario correcto');
  }

  reset() {
    this._resetBooksArray();
    this.form.reset({
      isSmoker: false,
      isReader: false,
    });
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }

  onReaderChange() {
    this.isReader?.valueChanges
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(isReader => {
        this.showBooks = isReader;
        this.readedBooks.controls.forEach(control => {
          if (isReader) {
            control.get('bookName')?.enable();
            control.get('bookName')?.setValidators([Validators.required]);
            control.get('bookName')?.updateValueAndValidity();
          } else {
            control.get('bookName')?.disable();
            control.get('bookName')?.clearValidators();
            control.get('bookName')?.updateValueAndValidity();
          }
        });
      });
  }

  addBook() {
    this.readedBooks.push(
      this.fb.group({
        bookName: [
          { value: '', disabled: !this.isReader?.value },
          [Validators.required],
        ],
      })
    );
  }

  removeBook(index: number) {
    this.readedBooks.removeAt(index);
  }

  private _resetBooksArray() {
    this.readedBooks.clear();
    this.readedBooks.push(
      this.fb.group({
        bookName: [{ value: '', disabled: true }, []],
      })
    );
  }
}
