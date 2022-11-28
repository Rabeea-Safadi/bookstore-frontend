import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AddPage from './pages/AddPage';
import BookPage from './pages/BookPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/book" element={<BookPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
