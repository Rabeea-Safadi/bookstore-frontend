import { useMutation } from '@tanstack/react-query';
import { FormEvent, useRef } from 'react';
import { IBookProps } from '../../components/Book/Book';
import styles from './AddPage.module.css';
import axios from 'axios';
import apiConfig from '../../api.config';

const AddPage = () => {
  const titleRef = useRef<HTMLInputElement>();
  const authorRef = useRef<HTMLInputElement>();
  const priceRef = useRef<HTMLInputElement>();
  const urlRef = useRef<HTMLInputElement>();

  const { mutate } = useMutation<IBookProps, unknown, IBookProps>(['books'], {
    mutationFn: (newBook) => {
      return axios.post(apiConfig.API_URI, newBook);
    },
  });

  function submitHandler(event: FormEvent) {
    event.preventDefault();

    const book: IBookProps = {
      author: authorRef.current?.value!,
      title: titleRef.current?.value!,
      price: Number(priceRef.current?.value!),
      coverURL: urlRef.current?.value!,
    };

    mutate(book);

    alert('added book');
  }

  return (
    <form className={styles['book-form']} onSubmit={submitHandler}>
      <input ref={titleRef} className={styles.book} type="text" placeholder="Book Title" minLength={3} required />
      <input ref={authorRef} className={styles.book} type="text" placeholder="Book Author" minLength={3} required />
      <input ref={priceRef} className={styles.book} type="number" placeholder="Book Price" min={1} max={1000} required />
      <input ref={urlRef} className={styles.book} type="url" placeholder="Book Cover URL" required />
      <input className={styles.book} type="submit" value="Add Book" />
    </form>
  );
};

export default AddPage;
