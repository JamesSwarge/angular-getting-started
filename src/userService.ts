import { IConnector } from "./iconnector";
export class UserService {
    public getUsers() {
        let iconnector: IConnector = window.ioc.resolve("IConnector");
        return iconnector.get("api/users.json");
    }
    public getUser(userId: string) {
        /*'IConnector": HttpConnector" */
        let iconnector: IConnector = window.ioc.resolve("IConnector");
        let url = String.format("api/user_{0}.json", userId);
        return iconnector.get(url);
    }
}