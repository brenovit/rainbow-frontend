import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorModule } from './error.module';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '404'
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: '401',
        component: UnauthorizedComponent
    },
    {
        path: '500',
        component: ServerErrorComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [ErrorModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ErrorRoutingModule {}
