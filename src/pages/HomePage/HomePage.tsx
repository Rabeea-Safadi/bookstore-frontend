import BookList from '../../components/BookList/BookList';
import apiConfig from '../../api.config';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { IBookProps } from '../../components/Book/Book';

const HomePage = () => {
  const [books, setBooks] = useState<IBookProps[]>([]);

  const { data, isLoading } = useQuery(['books'], async () => {
    const books = await axios.get(apiConfig.API_URI).then((res) => res.data);
    return books;
  });

  if (isLoading) {
    return <h1>Loading Books...</h1>;
  }

  return <BookList books={data} />;
};

export default HomePage;
