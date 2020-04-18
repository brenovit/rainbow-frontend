import { UserTableService } from './user-table.service';
import { AppSortableHeaderDirective } from './sortable.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { UsersComponent } from './users.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule } from './../../shared';
import { SortIconComponent } from './sort-icon/sort-icon.component';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, UsersRoutingModule, NgbModule, PageHeaderModule],
    providers: [DecimalPipe, UserTableService, AppSortableHeaderDirective],
    declarations: [UsersComponent, AppSortableHeaderDirective, SortIconComponent]
})
export class UsersModule {}
