import { FC } from 'react';
import Book, { IBookProps } from '../Book/Book';
import styles from './BookList.module.css';

export interface IBookListProps {
  books: IBookProps[];
}

const BookList: FC<IBookListProps> = ({ books }) => {
  return (
    <ul className={styles['book-list']}>
      {books.map((book) => (
        <Book {...book} key={book._id} />
      ))}
    </ul>
  );
};

export default BookList;
