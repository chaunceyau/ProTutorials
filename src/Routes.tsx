import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './views/About';
import Auth from './views/Auth';
// 
import Home from './views/Home';
import Instructor from './views/Instructor';
import Series from './views/Series';
import Sport from './views/Sport';
import Video from './views/Video';

const Routes = () => (
    <Switch>
        {
            routes.map(route =>
                <Route exact key={route.path} path={route.path} component={route.component} />
            )
        }
    </Switch>
)

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/series',
        component: Series
    },
    {
        path: '/series/:id',
        component: Series
    },
    {
        path: '/video/:id',
        component: Video

    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/instructor/:id',
        component: Instructor
    },
    {
        path: '/sport',
        component: Sport
    },
    {
        path: '/auth',
        component: Auth
    },

]

export default Routes