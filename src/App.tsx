import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AddPage from './pages/AddPage/AddPage';
import BookPage from './pages/BookPage/BookPage';
import HomePage from './pages/HomePage/HomePage';

const App = () => {
  const queryClient = new QueryClient({});

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/book" element={<BookPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
