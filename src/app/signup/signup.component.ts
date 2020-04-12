import { User } from './../shared/models/user';
import { ApiErro } from './../shared/models/api-erro';
import { Router } from '@angular/router';
import { AuthService } from './../shared/services/auth/auth.service';
import { Signup } from './../shared/models/signup';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    user: Signup;
    password: string;
    confirmPassword: string;
    apiErro: ApiErro;

    constructor(private auth: AuthService, private router: Router) {}

    ngOnInit() {
        this.user = new Signup();
    }

    close() {
        this.apiErro = undefined;
    }

    onSubmit() {
        this.user.senha = this.password;
        console.log(this.user);
        this.auth.register(this.user).subscribe(
            (data) => {
                console.log(data.message);
                this.router.navigate(['/login']);
            },
            (err) => {
                this.apiErro = err.error;
            }
        );
    }
}
