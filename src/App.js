import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { Login } from "./Pages/Login/Login";
import { GlobalStyle } from "./style/global";

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
