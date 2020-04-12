import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule),
        canActivate: [AuthGuard]
    },
    { path: 'login', loadChildren: () => import('./signin/signin.module').then((m) => m.SigninModule) },
    { path: 'register', loadChildren: () => import('./signup/signup.module').then((m) => m.SignupModule) },
    { path: 'error', loadChildren: () => import('./error/error-routing.module').then((m) => m.ErrorRoutingModule) },
    { path: '**', redirectTo: 'error' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
