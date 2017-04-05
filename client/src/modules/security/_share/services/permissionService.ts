import { IoCNames, BaseService, Promise, IConnector } from "@app/common";
import { IPermissionService } from "./ipermissionService";
export class PermissionService extends BaseService implements IPermissionService {
    public getPermissions(): Promise {
        let iconnector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        return iconnector.get(this.resolve("permissions.json"));
    }
}