import UserList from "./views/User/UserList";
import RoleList from "./views/Role/RoleList";
import PermissionList from "./views/Permission/PermissionList";

const routes = [
    {
        path: "/users",
        component: UserList
    },
    {
        path: "/roles",
        component: RoleList
    },
    {
        path: "/permissions",
        component: PermissionList
    }
];

export default routes;