import App from './App';
import './index.css';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from "react-scroll-to-top";
import LoginContext from './context/LoginContext'
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);


root.render(
  <>
  <LoginContext>
    <App />
  </LoginContext>
    <ScrollToTop smooth />
  </>
);
