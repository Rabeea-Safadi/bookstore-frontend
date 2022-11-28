import { FC } from 'react';
import { v4 } from 'uuid';
import styles from './Book.module.css';

export interface IBookProps {
  uuid: string;
  coverURL: string;
  author: string;
  title: string;
  price: number;
}

const Book: FC<IBookProps> = ({ author, coverURL, price, title, uuid }) => {
  return <img src={coverURL} alt={`${title} by ${author} for ${price}`} className={styles['cover-image']} />;
};

export default Book;
