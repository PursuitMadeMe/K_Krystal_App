import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
// import Home from "./Components/Home";
import Krystals from "./Components/Krystals";
import KrystalNewForm from "./Components/KrystalNewForm";
import KrystalEditForm from "./Components/KrystalEditForm";
import KrystalDetails from "./Components/KrystalDetails";
import FourOFour from "./Components/FourOFour";

import {LoggedInPage} from "./Pages/LoggedInPage"
import LoginPage from "./Pages/LoginPage";
import { UserProvider } from "./Providers/UserProvider";



function App() {
  return (
    <div className="App">
    <UserProvider>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/loggedIn" element={<LoggedInPage />} />
            <Route path="/krystals" element={<Krystals />} />
            <Route path="/krystals/:index" element={<KrystalDetails />} />
            <Route path="/krystals/:index/edit" element={<KrystalEditForm />} />
            <Route path="/krystals/new" element={<KrystalNewForm />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
      </UserProvider>
    </div>
  );
}

export default App;
