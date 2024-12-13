import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private apiUrl = 'http://localhost:8080/api/authentication';  // Update with your backend API URL

    constructor(private http: HttpClient) {}

    // Login method
    login(email: string, password: string): Observable<any> {
        const loginData = { email, password };
        return this.http.post<any>(`${this.apiUrl}/login`, loginData);
    }

    // Method to check if the user is logged in by checking the token
    isLoggedIn(): boolean {
        return localStorage.getItem('token') !== null;
    }

    // Method to log out the user by removing the token from storage
    logout(): void {
        localStorage.removeItem('token');
    }
}
