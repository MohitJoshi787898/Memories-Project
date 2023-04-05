import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDOM.createRoot(document.getElementById('root')).render(
<GoogleOAuthProvider clientId="985843998076-vnr7mjog8bo2bdvid7q0qk2h4j76sp4v.apps.googleusercontent.com">
<Provider store={store}>

  <React.StrictMode>
    <App />
  </React.StrictMode>,
</Provider>
</GoogleOAuthProvider>
  
)
