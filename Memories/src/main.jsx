import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
const CLIENT_ID=process.env.CLIENT_ID

const store = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDOM.createRoot(document.getElementById('root')).render(
<GoogleOAuthProvider clientId={CLIENT_ID}>
<Provider store={store}>

  <React.StrictMode>
    <App />
  </React.StrictMode>,
</Provider>
</GoogleOAuthProvider>
  
)
