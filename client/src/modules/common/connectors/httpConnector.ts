import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import { IConnector } from "./iconnector";
import { Promise, PromiseFactory } from "./../models/promise";
//import appConfig from "./appConfig";
import appHelper from "./../application/appHelper";

export class HttpConnector implements IConnector {
    public get(url: string): Promise {
        let http: Http = window.ioc.resolve(Http);
        let rootUrl = appHelper.config.rootApi;
        url = rootUrl + url;
        let def = PromiseFactory.create();
        http.get(url)
            .map(this.handleReponse)
            .subscribe(
            (data: any) => def.resolve(data)
            );
        return def;
    }
    public post(url: string, data: any): Promise {
        return null;
        // let rootUrl = appConfig.rootApi;
        // url = rootUrl + url;
        // let def = PromiseFactory.create();
        // this.http.post(url, data)
        //     .map(this.handleReponse)
        //     .subscribe(
        //     (data: any) => def.resolve(data)
        //     );
        // return def;
    }

    private handleReponse(response: Response) {
        return response.json();
    }
}