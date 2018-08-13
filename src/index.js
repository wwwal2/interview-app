import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';

function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
    );
}

const store = configureStore();


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
registerServiceWorker();
