import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { themStyle } from "./assets/styles/themeStyle";
import { Router } from "./router";

const query = new QueryClient();

export function App() {
  return (
    <ThemeProvider theme={themStyle}>
      <BrowserRouter>
        <QueryClientProvider client={query}>
          <Router />
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
