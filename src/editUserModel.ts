export class EditUserModel {
    public id: string;
    public firstName: string;
    public lastName: string;
    public import(user: any) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
    }
}