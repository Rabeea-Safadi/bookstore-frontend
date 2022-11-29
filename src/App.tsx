import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IBookProps } from './components/Book/Book';
import apiConfig from './api.config';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import AddPage from './pages/AddPage/AddPage';
import BookPage from './pages/BookPage/BookPage';
import HomePage from './pages/HomePage/HomePage';

const FAKE_BOOKS: IBookProps[] = [
  {
    uuid: '321321321',
    author: 'j.k rowling',
    title: 'harry potter',
    price: 25,
    coverURL: 'https://media.harrypotterfanzone.com/deathly-hallows-us-childrens-edition.jpg',
  },
  {
    uuid: '4143',
    author: 'j.k rowling',
    title: 'harry potter 2',
    price: 25,
    coverURL:
      'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/7/30/1406719264487/fd90e162-93de-41b1-aea5-f8e49227e85b-1360x2040.jpeg?width=700&quality=85&auto=format&fit=max&s=28732c5a7caa1d1249d3f420e247479b',
  },
  {
    uuid: '54121',
    author: 'j.k rowling',
    title: 'harry potter 3',
    price: 25,
    coverURL:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F09%2F9781408855652-png.jpg',
  },
];

const App = () => {
  const queryClient = new QueryClient({});
  const [books, setBooks] = useState<IBookProps[]>([]);

  useQuery(['books'], async () => {
    const data = await axios.get(apiConfig.API_URI).then((res) => res.data);
    setBooks(data);
  });

  function addBook(book: IBookProps): void {
    FAKE_BOOKS.push(book);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route index element={<HomePage books={FAKE_BOOKS} />} />
          <Route path="/add" element={<AddPage addBookHandler={addBook} />} />
          <Route path="/book" element={<BookPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
