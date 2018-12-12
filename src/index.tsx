/* tslint:disable:ordered-imports */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
// import {Hello} from './App';
// import {HelloComponent} from './App';
// import {StatefullHello} from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {enthusiasm,EnthusiasmAction,IStoreState,StateManagedHello} from './App';
import {Provider} from 'react-redux';
const store = createStore<IStoreState,EnthusiasmAction,any,any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});
ReactDOM.render(
  // <App />,
  // <StatefullHello name="TypeScript" enthusiasmLevel={10} />,
  <Provider store={store}> <StateManagedHello /> </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
