// Third Party Imports
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CustomRouter } from './router/CustomRouter';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layout/mainLayout.jsx';
import NotFoundLayout from './layout/NotFoundLayout.jsx';
import NotFoundPage from './pages/NotFound/NotFoundPage.jsx';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            {CustomRouter.filter((item) => item.path !== '*').map(
              (item, index) => (
                <Route path={item.path} key={index} element={item.element} />
              )
            )}
          </Route>
          <Route element={<NotFoundLayout />}>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
