import React from 'react'
import '../styles/home.css';
import FeaturedMovie from './featuredMovie';
import MovieRow from './movieRow';
import Header from './Header';

export default function Home() {


  return (
    <>
      <section className='homesection'>
        <Header />
        <div className="wrapper">
          <FeaturedMovie />
          <div className='movierowtitle'>
            <h2>Mowatch Yapımı Filmler</h2>
          </div>
          <MovieRow />
        </div>
      </section>
    </>
  );
}
