import styles from './AddPage.module.css';

const AddPage = () => {
  return (
    <form className={styles['book-form']}>
      <input className={styles.book} type="text" placeholder="Book Title" minLength={3} maxLength={25} required />
      <input className={styles.book} type="text" placeholder="Book Author" minLength={3} maxLength={25} required />
      <input className={styles.book} type="number" placeholder="Book Price" min={1} max={1000} required />
      <input className={styles.book} type="url" placeholder="Book Cover URL" required />
      <input className={styles.book} type="submit" value="Add Book" />
    </form>
  );
};

export default AddPage;
