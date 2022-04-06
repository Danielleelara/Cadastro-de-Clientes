import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Clients from "./pages/Clients";
import Details from "./pages/Details";
import Create from "./pages/Create";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />}></Route>
          <Route path="/clients" element={<Clients />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
