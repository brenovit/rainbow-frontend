import { TokenStorageService } from '../services/auth/token-storage.service';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class RoleGuard implements CanActivate {
    constructor(private router: Router, private token: TokenStorageService) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const expectedRoles = route.data.expectedRoles;
        const tokenPayload = decode(this.token.getToken());
        const roles = tokenPayload.roles.split(',');
        if (this.token.isAuthenticated() && expectedRoles.some((r) => roles.indexOf(r) !== -1)) {
            return true;
        }

        this.router.navigate(['error/401']);
        return false;
    }
}
