import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { Home } from "./pages";
import "./style.css";

export const Router = () => {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
};
