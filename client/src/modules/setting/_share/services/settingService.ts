import { IConnector, IoCNames, PromiseFactory, Promise, BaseService } from "../../../../modules/common/index";
import { ISettingService } from "./isettingService";
export class SettingService extends BaseService implements ISettingService {
    private iconnector: IConnector;
    public getContentTypes(): Promise {
        let iconnector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        return iconnector.get(this.resolve("contentTypes.json"));
    }
}