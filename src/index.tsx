/* tslint:disable:ordered-imports comment-format */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
//import {createStore} from 'redux';
//import {Provider} from 'react-redux';
import {App} from './App';
// const store = createStore<IStoreState,EnthusiasmAction,any,any>(enthusiasm, {
//   enthusiasmLevel: 1,
//   languageName: 'TypeScript',
// });
ReactDOM.render(
  <App />,
  //<Provider store={store}> <StateManagedHello /> </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
