import { useModalContext } from 'hooks/useModalContext';
import { Link } from 'react-router-dom';

// styles & assets
import logo from 'assets/library-logo.png';
import Modal from './Modal';
import './Nav.css';

export default function Nav({ numBooks }) {
  const { modalContext, setModalContext, closeModal } = useModalContext();

  function openNavModal() {
    setModalContext({
      type: 'nav',
      payload: null,
    });
  }

  return (
    <>
      <nav>
        <div className='container'>
          <Link to='/'>
            <img src={logo} alt='' className='logo' />
          </Link>
          <ul>
            <li>
              <Link to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/books' className='primary'>
                Books
              </Link>
            </li>
            <li className='hamburger' onClick={openNavModal}>
              <button className='hamburger'>
                <i className='fa-solid fa-bars'></i>
              </button>
            </li>
            <li className='shopping-cart'>
              <Link to='/cart'>
                <i className='fa-solid fa-cart-shopping'></i>
                {numBooks > 0 ? <span className='cart-size-bubble'>{numBooks}</span> : null}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {modalContext.type === 'nav' && (
        <Modal className={'nav-modal'}>
          <ul>
            <li className='fa-x-wrapper'>
              <i className='fa-solid fa-x' onClick={closeModal}></i>
            </li>
            <li>
              <Link to='/' onClick={closeModal}>
                <i className='link-icon fa-solid fa-house'></i>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to='/books' onClick={closeModal}>
                <i className='link-icon fa-solid fa-book'></i>
                <span>Books</span>
              </Link>
            </li>
            <li>
              <Link to='/cart' onClick={closeModal}>
                <i className='link-icon fa-solid fa-cart-shopping'></i>
                <span>Cart</span>
              </Link>
            </li>
          </ul>
        </Modal>
      )}
    </>
  );
}
