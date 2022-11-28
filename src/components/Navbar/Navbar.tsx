import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <ul className={styles.ul}>
      <li className={styles.logo} onClick={() => navigate('/')}>
        Bookstore
      </li>
      <li className={styles.addbook} onClick={() => navigate('/add')}>
        Add New Book
      </li>
    </ul>
  );
};

export default Navbar;
