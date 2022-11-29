import { useLocation } from 'react-router-dom';
import { IBookProps } from '../../components/Book/Book';
import styles from './BookPage.module.css';

const BookPage = () => {
  const book = useLocation().state as IBookProps;

  return (
    <div className={styles.book}>
      <div className={styles['book-info']}>
        <div className={styles['book-title']}>{book.title}</div>
        <div className={styles['book-author']}>{book.author}</div>
        <div className={styles['book-uuid']}>{book._id}</div>
        <div className={styles['book-price']}>{book.price}</div>
      </div>
      <img className={styles['book-image']} src={book.coverURL} alt="Book cover" />
    </div>
  );
};

export default BookPage;
