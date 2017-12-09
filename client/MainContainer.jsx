import React, { Component }        from 'react';
// import { Provider }                from 'mobx-react';

import App              from './App.jsx';
// import stores           from './stores';

export default class MainContainer extends Component {
    render() {
        return (
            // <Provider>
            <App />
            // </Provider>
        );
    }
}

