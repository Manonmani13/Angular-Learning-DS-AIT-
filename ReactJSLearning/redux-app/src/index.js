import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import P1 from './p1';
import P2 from './p2';
import Store from './mystore';

import { createStore } from 'redux';

const store = createStore(Store);

const root = ReactDOM.createRoot(document.getElementById('root'));

function comRef() {
  root.render(
    <React.StrictMode>
      <App dt={store.getState()} upstt={() => store.dispatch({ type: "333" })} />
      <P1 value={store.getState()} />
      <P2 value={store.getState()} />
    </React.StrictMode>
  );
}

comRef();             // initial render
store.subscribe(comRef);  // rerender on store updates

reportWebVitals();
