let routes: any = getRoute();
export default routes;
function getRoute() {
    let route: any = {
        user: {
            editUser: {
                name: "security.user.editUser",
                path: "editUser/:userId"
            }
        },
        permission: {
            permissions: {
                name: "security.permission.permissions",
                path: "permissions"
            }
        }
    };
    return route;
}