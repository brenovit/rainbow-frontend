import { Signin } from './../shared/models/signin';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { User } from '../shared/models/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    user: Signin;
    message: string;

    constructor(public router: Router) {}

    ngOnInit() {
        this.user = new Signin();
    }

    close() {
        this.message = undefined;
    }

    onLoggedin() {
        console.log(this.user);
        if (this.user.login === 'admin' && this.user.password === '123') {
            localStorage.setItem('isLoggedin', 'true');
            this.router.navigate(['/dashboard']);
        } else {
            this.message = 'Login Inválido';
        }
    }
}
