import { PromiseFactory, Promise } from "../../../../modules/common/index";
export interface IUserService {
    getUsers(): Promise;
    createUser(user: any): Promise;
}