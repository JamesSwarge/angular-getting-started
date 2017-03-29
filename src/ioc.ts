export class IoCFactory {
    public static create() {
        return new IoCContainer();
    }
}
export class IoCContainer {
    /**
     * [
     *  {name:"IConnector", mapTo: HttpConnector}
     * ]
     */
    private registrations: Array<any> = [];
    public import(registrations: Array<any>) {
        this.registrations = registrations;
    }
    public resolve(name: string) {
        let item = this.registrations.firstOrDefault((item: any) => {
            return item.name == name;
        });
        return new item.mapTo();
    }
}