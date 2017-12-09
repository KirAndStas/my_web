import React, { Component }         from 'react';
import { BrowserRouter }            from 'react-router-dom';
import { Switch, Route, Redirect }                    from 'react-router';

import MainLayout   from './components/layouts/MainLayout.jsx';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/en' component={MainLayout} />
                    <Route path='/de' component={MainLayout} />
                    <Route path='/ua' component={MainLayout} />
                    <Route path='/ru' component={MainLayout} />
                    <Redirect from='*' to='/en' />
                </Switch>
            </BrowserRouter>
        );
    }
}
