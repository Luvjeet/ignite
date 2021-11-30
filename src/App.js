import React from "react";
import { Route, Routes } from "react-router-dom";
// Components and pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";

function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game/:id" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
