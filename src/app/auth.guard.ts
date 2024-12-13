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
        // Check if JWT token exists in localStorage
        const token = localStorage.getItem('token');
        if (token) {
            // Token exists, allow access
            return true;
        } else {
            // Token doesn't exist, redirect to login page
            this.router.navigate(['/login']);
            return false;
        }
    }
}
