import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        // Check if the token exists in localStorage
        const token = localStorage.getItem('token');
        if (token) {
            // User is authenticated, allow access
            return true;
        } else {
            // Redirect to login page
            this.router.navigate(['/login']);
            return false;
        }
    }
}
