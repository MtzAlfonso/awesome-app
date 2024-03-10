import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService
  ) {
    this.loginForm = this.buildLoginForm();
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
    this._restoreSession();
  }

  buildLoginForm() {
    return this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rememberMe: [''],
    });
  }

  login() {
    if (this.loginForm.invalid) return;
    if (this.loginForm.value.rememberMe) {
      this._rememberSession(this.loginForm.value.username);
    } else this._clearSession();
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.authService.login(username, password);
  }

  private _rememberSession(username: string) {
    localStorage.setItem('remember', 'true');
    localStorage.setItem('username', username);
  }

  private _clearSession() {
    localStorage.removeItem('remember');
    localStorage.removeItem('username');
  }

  private _restoreSession() {
    const rememberMe = localStorage.getItem('remember') === 'true' || false;
    if (!rememberMe) return;
    const username = localStorage.getItem('username') || '';
    this.loginForm.reset({
      username,
      rememberMe,
    });
  }
}
