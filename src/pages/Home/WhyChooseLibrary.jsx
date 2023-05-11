// styles
import { faBolt, faBookOpen, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'css/pages/Home/WhyChooseLibrary.css';

export default function FeatureShowcase() {
  return (
    <section id='highlights'>
      <div className='container text--center'>
        <div className='row'>
          <div className='col'>
            <h2 className='section__title'>
              Why choose <span className='text--purple'>Library</span>
            </h2>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='highlights'>
              <div className='easy highlight__icon--wrapper'>
                <FontAwesomeIcon icon={faBolt} className='highlight__icon' />
              </div>
              <h3 className='easy highlight__title'>Easy And Quick</h3>
              <p className='easy highlight__para'>
                Get access to the book you purchased online instantly.
              </p>
              <div className='access highlight__icon--wrapper'>
                <FontAwesomeIcon icon={faBookOpen} className='highlight__icon' />
              </div>
              <h3 className='access highlight__title'>10,000+ Books</h3>
              <p className='access highlight__para'>
                Library has books in all your favorite categories.
              </p>
              <div className='affordable highlight__icon--wrapper'>
                <FontAwesomeIcon icon={faTags} className='highlight__icon' />
              </div>
              <h3 className='affordable highlight__title'>Affordable</h3>
              <p className='affordable highlight__para'>
                Get your hands on popular books for as little as $10.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
