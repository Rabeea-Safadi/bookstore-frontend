import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <ul className={styles.list}>
      <li className={styles['list-item']} onClick={() => navigate('/')}>
        Bookstore
      </li>
      <li className={styles['list-item']} onClick={() => navigate('/add')}>
        Add New Book
      </li>
    </ul>
  );
};

export default Navbar;
