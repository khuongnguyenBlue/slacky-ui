import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoginResponse } from './auth.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth'; // Replace with your actual API URL
  private tokenKey = 'auth_token'; // Key to store the token in local storage

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, body).pipe(
      tap((response) => {
        const token = response.access_token;
        this.storeToken(token); // Store the token in local storage
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey); // Remove the token from local storage
  }

  private storeToken(token: string): void {
    localStorage.setItem(this.tokenKey, token); // Store the token in local storage
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey); // Retrieve the token from local storage
  }

  // Add more authentication-related methods as needed (e.g., registration, logout)
  isAuthenticated(): boolean {
    const token = this.getToken();
    return token ? true : false;
  }
}
