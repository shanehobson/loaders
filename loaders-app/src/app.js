import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { MuiThemeProvider } from '@material-ui/core/styles';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import LoadingPage from './components/LoadingPage';
import customMuiTheme from './themes/theme.js';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <MuiThemeProvider theme={customMuiTheme}>
      <AppRouter />
    </MuiThemeProvider>
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));



// *******Code for implementing a loading page in the future************
// let hasRendered = false;
// const renderApp = () => {
//   if (!hasRendered) {
//     ReactDOM.render(jsx, document.getElementById('app'));
//     hasRendered = true;
//   }
// };

// ReactDOM.render(<LoadingPage />, document.getElementById('app'));


