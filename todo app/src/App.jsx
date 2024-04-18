// App.js
import React from "react";
import Auth from "./pages/Auth page/Auth";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Privateroute from "./Privateroute/PrivateRoute";
import Logout from "./components/Logout/Logout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route element={<Privateroute />}>
            <Route path="/home" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
          </Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
