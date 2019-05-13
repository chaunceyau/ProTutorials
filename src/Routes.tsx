import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Explore from './views/Explore';
// 
import Home from './views/Home';
import Instructor from './views/Instructor';
import Series from './views/Series';
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
        path: '/explore',
        component: Explore
    },
    {
        path: '/instructor/:id',
        component: Instructor
    }

]

export default Routes