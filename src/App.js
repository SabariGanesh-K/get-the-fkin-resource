import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/main';

import Departments from './components/departments';
import Resources from './components/resourcepage';
function App() {
  return (
<BrowserRouter>
    <Main/>
</BrowserRouter>


  );
}

export default App;
