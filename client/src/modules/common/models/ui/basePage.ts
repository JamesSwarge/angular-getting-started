import { Router } from "@angular/router";
import { BaseComponent } from "./baseComponent";
export class BasePage<Model> extends BaseComponent {
    protected router: Router;
    protected model: Model;
    constructor(router: Router) {
        super()
        this.router = router;
    }
    protected navigate(url: string, ...options: Array<any>) {
        let params = options || [];
        params.unshift(url);
        this.router.navigate(params);
    }
}