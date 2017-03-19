import { HttpConnector } from "./httpConnector";
import { IoCNames, IoCLifeCycle } from "./enum";
import { UserService } from "./userService";
let appConfig = {
    rootApi: "http://localhost:64772/api/",
    ioc: [
        { name: IoCNames.IUserService, instance: UserService, lifeCycle: IoCLifeCycle.Singleton },
        { name: IoCNames.IConnector, instance: HttpConnector, lifeCycle: IoCLifeCycle.Transient  }
    ]
}
export default appConfig