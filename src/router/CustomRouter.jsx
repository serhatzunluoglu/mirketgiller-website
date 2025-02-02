import LandingPage from '../pages/Landing/LandingPage.jsx';
import NotFoundPage from '../pages/NotFound/NotFoundPage.jsx';
import AboutUsPage from '../pages/AboutUs/AboutUsPage.jsx';
import ContactPage from '../pages/Contact/ContactPage.jsx';
import BlogPage from '../pages/Blog/BlogPage.jsx';
import EventsPage from '../pages/Events/EventsPage.jsx';
import EventDetailPage from '../pages/EventDetail/EventDetailPage.jsx';
import TeamPage from '../pages/Team/TeamPage.jsx';
import SupportedProjectsPage from '../pages/SupportedProjects/SupportedProjectsPage.jsx';
import KvkkPage from '../pages/Kvkk/KvkkPage.jsx';

export const CustomRouter = [
  { path: '/', element: <LandingPage /> },
  { path: '/hakkimizda', element: <AboutUsPage /> },
  { path: '/iletisim', element: <ContactPage /> },
  { path: '/blog', element: <BlogPage /> },
  { path: '/etkinliklerimiz', element: <EventsPage /> },
  { path: 'etkinliklerimiz/:slug', element: <EventDetailPage /> },
  { path: '/ekibimiz', element: <TeamPage /> },
  { path: '/kvkk', element: <KvkkPage /> },
  { path: '/destekledigimiz-projeler', element: <SupportedProjectsPage /> },
  { path: '*', element: <NotFoundPage /> },
];
