import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    imports: [],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
    email: string = '';
    password: string = '';

    constructor(private http: HttpClient, private router: Router) {}

    login() {
        const loginData = {
            email: this.email,
            password: this.password,
        };

        this.http
            .post('http://localhost:8080/api/authentication/login', loginData)
            .subscribe(
                (response: any) => {
                    // Store JWT token (in localStorage, sessionStorage, etc.)
                    localStorage.setItem('token', response.token);
                    this.router.navigate(['/']);
                },
                (error) => {
                    console.error('Login failed', error);
                }
            );
    }

}
