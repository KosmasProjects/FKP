import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home';
import Blog from '../pages/Aktualnosci';
import Fundacja from '../pages/Fundacja';
import Friends from '../pages/Przyjaciele';
import HelpUs from '../pages/Wesprzyj';
import Contact from '../pages/Kontakt';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aktualnosci" element={<Blog />} />
        <Route path="/fundacja" element={<Fundacja />} />
        <Route path="/przyjaciele" element={<Friends />} />
        <Route path="/wesprzyj" element={<HelpUs />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;