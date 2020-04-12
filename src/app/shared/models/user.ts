import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
export class User {
    token: string;
    type: string;
    id: number;
    username: string;
    name: string;
    permissions: string[];
}
