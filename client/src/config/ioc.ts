import { IoCNames, IoCLifeCycle } from "../modules/common/index";
import { HttpConnector } from "../modules/common/connectors/httpConnector";
import { UserService } from "../modules/security/_share/services/userService";
import { SettingService } from "../modules/setting/_share/services/settingService";
import { ConsoleLogger, EventManager, ResourceManager, CacheService, RouteService } from "../modules/common/index"
let ioc = [
    { name: IoCNames.IUserService, instance: UserService, lifeCycle: IoCLifeCycle.Singleton },
    { name: IoCNames.IConnector, instance: HttpConnector, lifeCycle: IoCLifeCycle.Singleton },
    { name: IoCNames.ILogger, instance: ConsoleLogger, lifeCycle: IoCLifeCycle.Singleton },
    { name: IoCNames.IEventManager, instance: EventManager, lifeCycle: IoCLifeCycle.Singleton },
    { name: IoCNames.IResource, instance: ResourceManager, lifeCycle: IoCLifeCycle.Singleton },
    { name: IoCNames.ISettingService, instance: SettingService, lifeCycle: IoCLifeCycle.Singleton },
    { name: IoCNames.ICacheService, instance: CacheService, lifeCycle: IoCLifeCycle.Singleton },
    { name: IoCNames.IRouteService, instance: RouteService, lifeCycle: IoCLifeCycle.Singleton }
    //{ name: IoCNames.IApplicationState, instanceFn: ApplicationStateFactory.getInstance(), type: IoCLifeCycle.Singleton },
];
export default ioc;