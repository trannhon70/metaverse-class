import { store } from "@/redux/store.ts";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { queryClient } from "./lib/reactQuery.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
        <Toaster position="top-right" />
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
