import React      from 'react';
import { render } from 'react-dom';
// import injectTapEventPlugin from 'react-tap-event-plugin';

require('./components/assets/index.js');
import MainContainer from './MainContainer.jsx';

const MOUNT_NODE = document.getElementById('root');

function renderApp() {
    // injectTapEventPlugin();

    render(<MainContainer />, MOUNT_NODE);
}

renderApp();
