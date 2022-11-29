import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import styles from './Book.module.css';

export interface IBookProps {
  _id?: string;
  coverURL: string;
  author: string;
  title: string;
  price: number;
}

const Book: FC<IBookProps> = ({ author, coverURL, price, title, _id }) => {
  const navigate = useNavigate();

  const handleBookClick = (book: IBookProps): void => {
    navigate('/book', {
      state: { ...book },
    });
  };

  return (
    <img
      src={coverURL}
      alt={`${title} by ${author} for ${price}`}
      className={styles['cover-image']}
      onClick={() => handleBookClick({ author, coverURL, price, title, _id })}
    />
  );
};

export default Book;
