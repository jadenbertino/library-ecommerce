import Explore from './Explore';
import Highlights from './WhyChooseLibrary';
import Landing from './Landing';
import PopularBooks from './PopularBooks'
import DiscountedBooks from './DiscountedBooks';

import './Home.css'

export default function Home() {
  return (
    <>
      <Landing />
      <main>
        <Highlights />
        <PopularBooks />
        <DiscountedBooks />
        <Explore />
      </main>
    </>
  );
}
