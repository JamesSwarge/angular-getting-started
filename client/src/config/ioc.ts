import { IoCNames, IoCLifeCycle } from "../modules/common/index";
import { HttpConnector } from "../modules/common/connectors/httpConnector";
import { UserService } from "../modules/security/_share/services/userService";
let ioc = [
    { name: IoCNames.IUserService, instance: UserService, lifeCycle: IoCLifeCycle.Singleton },
    { name: IoCNames.IConnector, instance: HttpConnector, lifeCycle: IoCLifeCycle.Transient }
];
export default ioc;