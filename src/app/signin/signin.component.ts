import { TokenStorageService } from './../shared/services/auth/token-storage.service';
import { Signin } from '../shared/models/signin';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { ApiErro } from '../shared/models/api-erro';
import { AuthService } from '../shared/services/auth/auth.service';
import { User } from '../shared/models/user';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
    animations: [routerTransition()]
})
export class SigninComponent implements OnInit {
    user: Signin;
    apiErro: ApiErro;
    constructor(private auth: AuthService, private token: TokenStorageService, public router: Router) {}

    ngOnInit() {
        this.user = new Signin();
    }

    close() {
        this.apiErro = undefined;
    }

    onSubmit() {
        this.auth.login(this.user).subscribe(
            (data) => {
                const loggedUser: User = data;
                this.token.saveUser(loggedUser);
                this.token.saveToken(loggedUser.token);
                this.router.navigate(['/dashboard']);
            },
            (err) => {
                this.apiErro = err.error;
            }
        );
    }
}
