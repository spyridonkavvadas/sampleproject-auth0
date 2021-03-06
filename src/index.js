import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router } from "react-router-dom";


const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const onRedirectCallback = (appState) => {
  History.push(
    appState && appState.returnTo
      ? appState.returnTo
      : window.location.pathname
  );
};



// console.log(domain);
// console.log(clientId);

ReactDOM.render(
  
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>,
    

  document.getElementById('root')
);


