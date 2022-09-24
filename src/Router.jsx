import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { Home, Content } from "./pages";
import "./style.css";

export const Router = () => {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route index element={<Home />} />
        <Route path="content" element={<Content />} />
      </Routes>
    </>
  );
};
