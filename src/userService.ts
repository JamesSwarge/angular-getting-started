export class UserService {
    public getUsers(): Array<any> {
        return [
            { id: "1", firstName: "Tu", lastName: "Tran", userName: "tutran", avatar: "doraemon.jpg" }
        ];
    }
}