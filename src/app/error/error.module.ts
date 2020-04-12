import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerErrorComponent } from './server-error/server-error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [UnauthorizedComponent, NotFoundComponent, ServerErrorComponent],
    exports: [UnauthorizedComponent, NotFoundComponent, ServerErrorComponent]
})
export class ErrorModule {}
