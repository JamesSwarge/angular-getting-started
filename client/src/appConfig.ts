//import { HttpConnector } from "./httpConnector";
import { HttpConnector } from "./modules/common/index";
//import { IoCNames, IoCLifeCycle } from "./enum";
import { IoCNames, IoCLifeCycle } from "./modules/common/index";
import { UserService } from "./userService";
let appConfig = {
    rootApi: "http://localhost:3000/api/",
    ioc: [
        { name: IoCNames.IUserService, instance: UserService, lifeCycle: IoCLifeCycle.Singleton },
        { name: IoCNames.IConnector, instance: HttpConnector, lifeCycle: IoCLifeCycle.Transient  }
    ]
}
export default appConfig