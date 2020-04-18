import { Directive, EventEmitter, Input, Output, HostBinding, HostListener } from '@angular/core';
import { Country } from './models/country';

export type SortColumn = keyof Country | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { asc: 'desc', desc: '', '': 'asc' };

export interface SortEvent {
    column: string;
    direction: SortDirection;
}

@Directive({
    selector: 'th[appSortable]'
})
export class AppSortableHeaderDirective {
    @Input() appSortable: string;
    @Input() direction: SortDirection = '';
    @Output() sort = new EventEmitter<SortEvent>();

    @HostBinding('class.asc') get isAscending() {
        return this.direction === 'asc';
    }
    @HostBinding('class.desc') get isDescending() {
        return this.direction === 'desc';
    }
    @HostListener('click') rotate() {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.appSortable, direction: this.direction });
    }
}
