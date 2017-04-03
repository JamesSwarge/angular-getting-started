export const IoCNames = {
    IUserService: "IUserService",
    IConnector: "IConnector",
    IEventManager: "IEventManager",
    IResource: "IResource",
    ILogger: "ILogger",
    ISettingService: "ISettingService"
};

export enum IoCLifeCycle {
    Transient = 1,
    Singleton = 2
}