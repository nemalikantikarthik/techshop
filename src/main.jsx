import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./utils/theme.jsx";
import { Provider } from "react-redux";
import { store } from "./Redux/store.jsx";
createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
