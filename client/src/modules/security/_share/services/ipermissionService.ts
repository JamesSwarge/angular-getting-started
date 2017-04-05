import { Promise } from "@app/common";
export interface IPermissionService {
    getPermissions(): Promise;
}