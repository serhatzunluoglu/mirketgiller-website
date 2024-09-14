// Third Party Imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CustomRouter } from "./router/CustomRouter";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          {CustomRouter.map((item, index) => {
            return (
              <Route path={item.path} key={index} element={item.element} />
            );
          })}
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
