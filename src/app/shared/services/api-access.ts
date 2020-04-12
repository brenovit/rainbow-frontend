import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class ApiAccess {
    private baseUrl = environment.baseUrl;
    constructor(protected httpCliente: HttpClient) {}

    getUrl(endpoint: string) {
        return `${this.baseUrl}/${endpoint}`;
    }
}
