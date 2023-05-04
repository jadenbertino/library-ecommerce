import useLocalStorage from 'hooks/useLocalStorage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Footer, Nav } from './components/components';
import { BookInfo, Books, Cart, Home } from './pages/pages';

// styles
import './App.css';

export default function App() {
  const [cart, setCart] = useLocalStorage('cartLocalStorage', []);

  function addItemToCart(book) {
    const dupeItem = cart.find((item) => item.id === book.id); // returns dupe object or null
    setCart((oldCart) =>
      dupeItem
        ? // item already in cart -> add 1 to quantity
          oldCart.map((item) =>
            item.id === dupeItem.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : // item not in cart -> set quantity to 1
          [...oldCart, { ...book, quantity: 1 }]
    );
  }

  function updateCart(item, newQuantity) {
    setCart((oldCart) =>
      oldCart.map((oldItem) =>
        oldItem.id === item.id ? { ...oldItem, quantity: +newQuantity } : oldItem
      )
    );
  }

  function removeItem(item) {
    setCart((oldCart) => oldCart.filter((cartItem) => cartItem.id !== item.id));
  }

  function getNumBooks() {
    let numBooks = 0;
    cart.forEach((item) => (numBooks += item.quantity));
    return numBooks;
  }

  function calcPrices() {
    let total = 0;
    cart.forEach((item) => {
      total += (item.salePrice || item.originalPrice) * item.quantity;
    });
    return {
      subtotal: total * 0.9,
      tax: total * 0.1,
      total,
    };
  }

  return (
    <>
      <Router>
        <Nav numBooks={getNumBooks()} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/books/:id' element={<BookInfo addItemToCart={addItemToCart} />} />
          <Route
            path='/cart'
            element={
              <Cart
                cart={cart}
                updateCart={updateCart}
                removeItem={removeItem}
                totals={calcPrices()}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
