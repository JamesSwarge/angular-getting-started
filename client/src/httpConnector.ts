import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { IConnector } from "./iconnector";
import { Promise, PromiseFactory } from "./promise";
import appConfig from "./appConfig";
@Injectable()
export class HttpConnector implements IConnector {
    private http: Http;
    constructor(http: Http) {
        this.http = http;
    }
    public get(url: string): Promise {
        let rootUrl = appConfig.rootApi;
        url = rootUrl + url;
        let def = PromiseFactory.create();
        this.http.get(url)
            .map(this.handleReponse)
            .subscribe(
            (data: any) => def.resolve(data)
            );
        return def;
    }
    public post(url: string, data: any): Promise {
        let rootUrl = appConfig.rootApi;
        url = rootUrl + url;
        let def = PromiseFactory.create();
        this.http.post(url, data)
            .map(this.handleReponse)
            .subscribe(
            (data: any) => def.resolve(data)
            );
        return def;
    }

    private handleReponse(response: Response) {
        return response.json();
    }
}