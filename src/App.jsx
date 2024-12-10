// Third Party Imports
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CustomRouter } from './router/CustomRouter';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layout/mainLayout.jsx';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            {CustomRouter.map((item, index) => (
              <Route path={item.path} key={index} element={item.element} />
            ))}
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
