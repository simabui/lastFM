import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './styles/styles.css';
import configureStore from './redux/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-placeholder/lib/reactPlaceholder.css';

// redux store
const store = configureStore;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
