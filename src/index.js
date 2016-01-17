import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import createHashHistory from 'history/lib/createHashHistory';
import configureStore from './store/configureStore';
import Root from './views/Root';

const history = createHashHistory({ queryKey: false });
const store = configureStore(window.__INITIAL_STATE__, { history });
const node = <Root history={history} store={store} />;
const $target = document.getElementById('mount');

render(node, $target);
