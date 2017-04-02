import { Router } from "@angular/router";
import { AfterViewInit } from "@angular/core";
export class BasePage implements AfterViewInit {
    protected router: Router;
    constructor(router: Router) {
        this.router = router;
    }
    ngAfterViewInit() {
        this.onReady();
    }
    protected onReady() { }
    protected navigate(url: string, ...options: Array<any>) {
        let params = options||[];
        params.unshift(url);
        this.router.navigate(params);
    }
}