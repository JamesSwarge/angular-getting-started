import { IoCFactory, IoCContainer } from "./ioc";
import appConfig from "./appConfig";
import { Observable } from "rxjs";

let iocHelper = {
    config: config
};
export default iocHelper;
function config() {
    let iocContainer: IoCContainer = IoCFactory.create();
    iocContainer.import(appConfig.ioc);
    window.ioc = iocContainer;
    let def = Observable.from([iocContainer]);
    return def;
}