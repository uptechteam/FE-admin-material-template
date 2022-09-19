import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { AppRouter, ErrorBoundary } from "@common";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "@styles";

import "@styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";

const App: FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ErrorBoundary>
          <AppRouter />
          <ToastContainer />
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
