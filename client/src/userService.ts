import { PromiseFactory, Promise } from "./promise";
import { IConnector } from "./iconnector";
import { IUserService } from "./iuserService";
import { IoCNames } from "./enum";
export class UserService implements IUserService {
    private iconnector: IConnector;
    public getUsers(): Promise {
        let iconnector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        return iconnector.get("/users.json");
    }
    public createUser(user: any): Promise {
        let iconnector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        return iconnector.post("/users", user);
    }
}