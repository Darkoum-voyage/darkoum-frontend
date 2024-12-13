import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private router: Router, private authService: AuthService) {}

    onLogin(): void {
        // Assuming login method in AuthService is successfully handling the login
        this.authService.login(this.email, this.password).subscribe({
            next: (response) => {
                // Store JWT token, if any
                localStorage.setItem('token', response.token);
                this.router.navigate(['/dashboard']);  // Redirect to dashboard
            },
            error: (error) => {
                console.error('Login failed', error);
            },
        });
    }
}
