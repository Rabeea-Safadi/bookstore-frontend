import { FC } from 'react';
import { IBookProps } from '../../components/Book/Book';
import BookList from '../../components/BookList/BookList';

export interface IHomePageProps {
  books: IBookProps[];
}

const HomePage: FC<IHomePageProps> = ({ books }) => {
  return <BookList books={books} />;
};

export default HomePage;
