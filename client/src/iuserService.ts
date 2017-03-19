import { PromiseFactory, Promise } from "./promise";
export interface IUserService {
    getUsers(): Promise;
    createUser(user: any): Promise;
}