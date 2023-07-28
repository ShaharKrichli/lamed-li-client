// routing
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";

// comps
import App from "./App";

// css
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router>
    <App />
  </Router>
);
