import { IConnector, IoCNames, PromiseFactory, Promise } from "../../../../modules/common/index";
import { ISettingService } from "./isettingService";
export class SettingService implements ISettingService {
    private iconnector: IConnector;
    public getContentTypes(): Promise {
        let iconnector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        return iconnector.get("/contentTypes.json");
    }
}