import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/observable";
import { PromiseFactory, Promise } from "./promise";
import { HttpConnector } from "./httpConnector";
import { IConnector } from "./iconnector";

@Injectable()
export class UserService {
    private iconnector: IConnector;
    constructor(iconnector: HttpConnector) {
        this.iconnector = iconnector;
    }
    public getUsers(): Promise {
        return this.iconnector.get("/api/users.json");
    }
}