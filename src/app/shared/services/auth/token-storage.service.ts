import { User } from './../../models/user';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const jwtHelper = new JwtHelperService();

@Injectable({
    providedIn: 'root'
})
export class TokenStorageService {
    constructor() {}

    public isAuthenticated(): boolean {
        return !jwtHelper.isTokenExpired(this.getToken());
    }

    public signOut() {
        window.sessionStorage.clear();
    }

    public saveToken(token: string) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }

    public getToken(): string {
        return sessionStorage.getItem(TOKEN_KEY);
    }

    public saveUser(user: User) {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }

    public getUser(): User {
        return JSON.parse(sessionStorage.getItem(USER_KEY));
    }
}
