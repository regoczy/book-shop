import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

    private apiBaseURL: string = "https://www.googleapis.com/books/v1";

    constructor(private http: HttpClient) {}

    public get<T>(endpoint: string): Observable<T> {
        let url = this.getURL(endpoint);
        console.log("Getting...", url);
        return this.http.get<T>(url);
    }

    public post<T>(endpoint: string, obj: T): Observable<T> {
        let url = this.getURL(endpoint);
        console.log("Posting...", url, obj);
        return this.http.post<T>(url, obj,
            { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) });
    }

    private getURL(endpoint: string): string {
        if (endpoint.charAt(0) != '/') {
            endpoint = endpoint + '/';
        }
        return this.apiBaseURL + endpoint;
    }
}