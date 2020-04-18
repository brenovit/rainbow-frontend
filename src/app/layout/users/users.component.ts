import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { AppSortableHeaderDirective, SortEvent } from './sortable.directive';
import { Observable } from 'rxjs';
import { Country } from './models/country';
import { UserTableService } from './user-table.service';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    animations: [routerTransition()]
})
export class UsersComponent implements OnInit {
    countries$: Observable<Country[]>;
    total$: Observable<number>;
    sortedColumn!: string;
    sortedDirection!: string;

    @ViewChildren(AppSortableHeaderDirective) headers: QueryList<AppSortableHeaderDirective>;

    constructor(public service: UserTableService) {
        this.countries$ = service.countries$;
        this.total$ = service.total$;
    }
    ngOnInit(): void {}

    onSort({ column, direction }: SortEvent) {
        // resetting other headers
        /*this.headers.forEach((header) => {
            if (header.appSortable !== column) {
                header.direction = '';
            }
        });*/
        this.sortedColumn = column;
        this.sortedDirection = direction;

        this.service.sortColumn = column;
        this.service.sortDirection = direction;
    }
}
