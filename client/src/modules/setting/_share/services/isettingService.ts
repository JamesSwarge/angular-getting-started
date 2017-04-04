import { Promise } from "../../../common/index";
export interface ISettingService {
    getContentTypes(): Promise;
    getContentType(id:string): Promise;
    createContentType<TContent>(content: TContent): Promise;
    updateContentType<TContent>(content: TContent): Promise;
}