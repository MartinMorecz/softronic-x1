import { Injectable, signal } from '@angular/core';

const TOKEN_KEY = 'softronic_token';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // optional: expose user state later
  readonly token = signal<string | null>(this.getToken());

  isLoggedIn(): boolean {
    const t = this.getToken();
    return !!t; // for now: "token exists". Later: validate exp, call backend, etc.
  }

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  setToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
    this.token.set(token);
  }

  logout() {
    localStorage.removeItem(TOKEN_KEY);
    this.token.set(null);
  }
}
