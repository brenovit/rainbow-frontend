import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import * as authComponents from './components';

@NgModule({
    imports: [CommonModule, TranslateModule, FormsModule, NgbAlertModule, RouterModule],
    declarations: [...authComponents.components],
    exports: [...authComponents.components]
})
export class AuthModule {}
