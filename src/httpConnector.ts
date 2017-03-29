import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import { IConnector } from "./iconnector";

export class HttpConnector implements IConnector {
    // private http: Http;
    // constructor(http: Http) {
    //     this.http = http;
    // }
    public get(url: string): Observable<any> {
        let users = [
            {
                "id": "1",
                "firstName": "Tu",
                "lastName": "Tran"
            }
        ];
        return Observable.from([users]);
        // return this.http.get(url)
        //     .map((response: Response) => { return response.json(); })
    }
}