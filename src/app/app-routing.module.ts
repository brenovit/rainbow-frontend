import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule),
        canActivate: [AuthGuard]
    },
    { path: 'auth', loadChildren: () => import('./auth/auth-routing.module').then((m) => m.AuthRoutingModule) },
    { path: 'error', loadChildren: () => import('./error/error-routing.module').then((m) => m.ErrorRoutingModule) },
    { path: '**', redirectTo: 'error' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
