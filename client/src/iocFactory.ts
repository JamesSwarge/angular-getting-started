import { IoCLifeCycle } from "./enum";
import {SingletonObjectBuilder} from "./builder/singletonObjectBuilder";
import {TransientObjectBuilder} from "./builder/transientObjectBuilder";
import {IObjectBuilder} from "./builder/iobjectBuilder";
export class IoCFactory {
    public static create(): IocContainer {
        return new IocContainer();
    }
}
export class IocContainer {
    private registrations: Array<any>;
    constructor() {
        this.registrations = [];
    }
    public import(registrations: Array<any>) {
        this.registrations = registrations;
    }

    public resolve(name: string): any {
        let declaration = this.registrations.firstOrDefault((item: any) => { return item.name == name; });
         let objectBuilder: IObjectBuilder = this.getObjectBuilder(declaration);
        return objectBuilder.build();
    }
    private getObjectBuilder(declaration: any): IObjectBuilder{
        switch (declaration.lifeCycle) {
            case IoCLifeCycle.Singleton:
                return new SingletonObjectBuilder(declaration);
            default:
            case IoCLifeCycle.Transient:
            return new TransientObjectBuilder(declaration);
        }
    }
}