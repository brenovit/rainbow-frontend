import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth.module';
import * as authComponents from './components';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        component: authComponents.SigninComponent
    },
    {
        path: 'register',
        component: authComponents.SignupComponent
    }
];

@NgModule({
    imports: [AuthModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
