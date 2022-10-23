import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ChatRoom from "./components/pages/ChatRoom";
import JoinRoom from "./components/pages/JoinRoom";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<JoinRoom />} />
        <Route path="/:room" element={<ChatRoom />} />
      </Route>
    </Routes>
  </BrowserRouter>
);