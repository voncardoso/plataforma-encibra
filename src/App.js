import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Login } from "./components/Pages/Login";
import {GlobalStyle} from './style/global'


function App() {
  return (
    <div>
      <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
