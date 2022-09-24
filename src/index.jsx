import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { Router } from "./Router-file";
import { theme } from "./theme";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </BrowserRouter>
);
