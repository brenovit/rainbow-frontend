import { Signin } from './../../models/signin';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiAccess } from '../api-access';
import { Signup } from '../../models/signup';

@Injectable({
    providedIn: 'root'
})
export class AuthService extends ApiAccess {
    login(credentials: Signin): Observable<any> {
        return this.httpCliente.post(this.getUrl('signin'), credentials);
    }

    register(user: Signup): Observable<any> {
        return this.httpCliente.post(this.getUrl('signup'), user);
    }
}
