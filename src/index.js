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
      <Route path="/ChattyYappy" element={<App />}>
        <Route path="/ChattyYappy" element={<JoinRoom />} />
        <Route path="/ChattyYappy/:room" element={<ChatRoom />} />
      </Route>
    </Routes>
  </BrowserRouter>
);