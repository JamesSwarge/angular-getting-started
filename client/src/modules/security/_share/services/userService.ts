import { PromiseFactory, Promise } from "../../../../modules/common/index";
import { IConnector } from "../../../../modules/common/index";
import { IUserService } from "./iuserService";
import { IoCNames } from "../../../../modules/common/index";
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