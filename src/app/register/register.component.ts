import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    name: string = '';
    email: string = '';
    phoneNumber: string = '';
    password: string = '';

    constructor(private http: HttpClient, private router: Router) {}

    register() {
        const userData = {
            name: this.name,
            email: this.email,
            phoneNumber: this.phoneNumber,
            password: this.password,
        };

        this.http
            .post('http://localhost:8080/api/authentication/register', userData)
            .subscribe(
                (response) => {
                    console.log('Registration successful', response);
                    this.router.navigate(['/login']);
                },
                (error) => {
                    console.error('Registration failed', error);
                }
            );
    }
}
