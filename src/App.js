import React from "react";
import styled from "styled-components";
import "./App.css";
import { Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />

      <AppBody>
        <Sidebar />
        <Routes>
          <Route path="/" element={<></>} />
        </Routes>
      </AppBody>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
