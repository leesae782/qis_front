import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './reducer/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}> {/* Redux Store 를 불러와 Provideer 컴포넌트에 props로 전달 */}
      <App />
    </Provider>
  // </React.StrictMode>
);


reportWebVitals();
