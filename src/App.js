import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import ClientList from "./Pages/ClientList";
import Details from "./Pages/Details";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />}></Route>
          <Route path="/clients" element={<ClientList />}></Route>
          <Route path="/create" element={<ClientList />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
