import { useLocation } from 'react-router-dom';
import { IBookProps } from '../components/Book/Book';

const BookPage = () => {
  const book = useLocation().state as IBookProps;

  return (
    <div>
      <div>{book.title}</div>
      <div>{book.author}</div>
      <div>{book.uuid}</div>
      <div>{book.price}</div>
      <img src={book.coverURL} alt="Book cover" />
    </div>
  );
};

export default BookPage;
