import React from 'react';

export default () => {
  return (
    <section className="promo-gallery">
      <img
        className="gallery-picture"
        src={process.env.PUBLIC_URL + './complex1.jpg'}
        srcSet={`${process.env.PUBLIC_URL + './complex1@2x.jpg'} 2x, ${process.env.PUBLIC_URL + './complex1@3x.jpg'} 3x`}
      />
      <img
        className="gallery-picture"
        src={process.env.PUBLIC_URL + './complex2.jpg'}
        srcSet={`${process.env.PUBLIC_URL + './complex2@2x.jpg'} 2x, ${process.env.PUBLIC_URL + './complex2@3x.jpg'} 3x`}
      />
      <img
        className="gallery-picture"
        src={process.env.PUBLIC_URL + './complex3.jpg'}
        srcSet={`${process.env.PUBLIC_URL + './complex3@2x.jpg'} 2x, ${process.env.PUBLIC_URL + './complex3@3x.jpg'} 3x`}
      />
      <img
        className="gallery-picture"
        src={process.env.PUBLIC_URL + './complex4.jpg'}
        srcSet={`${process.env.PUBLIC_URL + './complex4@2x.jpg'} 2x, ${process.env.PUBLIC_URL + './complex4@3x.jpg'} 3x`}
      />
      <img
        className="gallery-picture"
        src={process.env.PUBLIC_URL + './complex5.jpg'}
        srcSet={`${process.env.PUBLIC_URL + './complex5@2x.jpg'} 2x, ${process.env.PUBLIC_URL + './complex5@3x.jpg'} 3x`}
      />
      <div className="gallery-overlay">
        <button className="gallery-button">41 фотография</button>
      </div>
    </section>
  );
};
