import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
import { catchError } from 'rxjs';
import { waitFor } from '../utils/utils';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  constructor(
    private readonly http: HttpClient,
    private readonly spinner: NgxSpinnerService,
    private readonly snackbar: MatSnackBar,
    private readonly router: Router
  ) {
    this._restoreSession();
  }

  async login(username: string, password: string) {
    this.spinner.show();
    await waitFor(2_000);
    if (username !== 'admin' || password !== 'admin') {
      this.isLoggedIn = false;
      this.spinner.hide();
      this._showSnackbar('Usuario o contraseña incorrectos');
      return;
    }
    if (!username || !password) return;
    // TODO: Cambiar implementación por token real
    const token = this._createLocalToken(username, password);
    this._saveToken(token);
    this.isLoggedIn = true;
    this.spinner.hide();
    this.router.navigate(['/pages/bienvenido']);
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  private _restoreSession() {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;
      const data = JSON.parse(this._decodeLocalToken(token));
      if (data.username !== 'admin' || data.password !== 'admin') {
        console.log({ data });
        this.logout();
        return;
      }
      this.isLoggedIn = true;
    } catch (error) {
      console.error(error);
      this.logout();
    }
  }

  private _createLocalToken(username: string, password: string) {
    return btoa(JSON.stringify({ username, password }));
  }

  private _decodeLocalToken(token: string) {
    return atob(token);
  }

  private _saveToken(token: string) {
    if (!token) return;
    localStorage.setItem('token', token);
  }

  private _showSnackbar(message: string) {
    this.snackbar.open(message, 'Cerrar', {
      duration: 3_000,
    });
  }

  // TODO: Revisar implementación, validando el backend
  private _postLogin(username: string, password: string) {
    return this.http
      .post('https://desa.ies-webcontent.com.mx/login', {
        username,
        password,
      })
      .pipe(
        catchError(error => {
          this._showSnackbar(error.message);
          return error;
        })
      );
  }
}
