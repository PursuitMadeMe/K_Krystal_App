import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Krystals from "./Components/Krystals";
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
            <Route path="/about" element={<About/>}/>
            <Route path="/loggedIn" element={<LoggedInPage />} />
            <Route path="/krystals" element={<Krystals />} />
            <Route path="/krystals/:index" element={<KrystalDetails />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
      </UserProvider>
    </div>
  );
}

export default App;
