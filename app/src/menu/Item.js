import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import React from "react";
import {Router, Switch, Route, Link} from "react-router-dom";
import {createBrowserHistory} from "history";
import routes from "../routes";

const hist = createBrowserHistory();

const switchRoutes = (
    <Switch>
        {routes.map((prop, key) => {
            return (
                <Route
                    path={prop.path}
                    component={prop.component}
                    key={key}
                />
            );
        })}
    </Switch>
);

export const mainListItems = (
    <div>
        <Router history={hist}>
            <ListItem button component={Link} to="/users">
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Users" />
            </ListItem>
            <ListItem button component={Link} to="/roles">
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Roles" />
            </ListItem>
            <ListItem button component={Link} to="/permissions">
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Permissions" />
            </ListItem>
            {switchRoutes}
        </Router>
    </div>
);