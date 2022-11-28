import { IBookProps } from '../components/Book/Book';
import BookList from '../components/BookList/BookList';

const FAKE_BOOKS: IBookProps[] = [
  {
    uuid: '321321321',
    author: 'j.k rowlling',
    title: 'harry potter',
    price: 25,
    coverURL: 'https://media.harrypotterfanzone.com/deathly-hallows-us-childrens-edition.jpg',
  },
  {
    uuid: '4143',
    author: 'j.k rowlling',
    title: 'harry potter 2',
    price: 25,
    coverURL:
      'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/7/30/1406719264487/fd90e162-93de-41b1-aea5-f8e49227e85b-1360x2040.jpeg?width=700&quality=85&auto=format&fit=max&s=28732c5a7caa1d1249d3f420e247479b',
  },
  {
    uuid: '54121',
    author: 'j.k rowlling',
    title: 'harry potter 3',
    price: 25,
    coverURL: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F09%2F9781408855652-png.jpg',
  },
];

const HomePage = () => {
  return <BookList books={FAKE_BOOKS} />;
};

export default HomePage;
