import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./index.css";
import store from "./redux/store";
import { GlobalStyles, theme } from "./shared/styles";
import { Wrapper } from "./shared/styles/wrapper";
import { App } from "./components/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Toaster />
        <GlobalStyles />
        <Wrapper>
          <App />
        </Wrapper>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
