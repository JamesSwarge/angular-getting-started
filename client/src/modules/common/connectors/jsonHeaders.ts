import {Http, Headers} from "@angular/http";
export class JsonHeaders extends Headers {
    constructor() {
        super();
        this.append("Content-Type", "application/json");
        this.append("accept", "application/json");
        //let token: any = authService.getAuth().token;
        // if (!!token && !String.isNullOrWhiteSpace(token.value)) {
        //     this.append(configHelper.getAppConfig().auth.token, token.value);
        // }
    }
}