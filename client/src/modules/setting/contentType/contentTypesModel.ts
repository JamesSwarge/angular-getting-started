import { IoCNames } from "../../common/index";
export class ContentTypesModel {
    public options: any = {};
    public eventKey: string = "contenttypes_ondatasource_changed";
    public actions: Array<any> = [];
    constructor(resourceHelper: any) {
        this.options = {
            columns: [
                { field: "name", title: "setting.contentTypes.grid.name" },
                { field: "key", title: "setting.contentTypes.grid.name" },
                { field: "description", title: "setting.contentTypes.grid.description" }
            ],
            data: [],
            enableEdit: true,
            enableDelete: true
        };
    }
    public addPageAction(action: any) {
        this.actions.push(action);
    }
    public import(items: Array<any>) {
        let eventManager = window.ioc.resolve(IoCNames.IEventManager);
        eventManager.publish(this.eventKey, items);
    }
}