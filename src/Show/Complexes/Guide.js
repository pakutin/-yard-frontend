import React from 'react';
export default () => {
  return (
    <section className="guide">
      <div className="container">
        <div className="row">
          <div className="col-xs-6">
            <div className="guide-name">
              <p className="guide-label">Якиманка</p>
              <p className="guide-tagline">
                Исторический центр Москвы в двух
                <br />
                километрах от&nbsp;Кремля
              </p>
              <p><a className="guide-link" href>Гид по Якиманке →</a></p>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="guide-cover">
              <img src={process.env.PUBLIC_URL + './polyankaPhoto.jpg'}
                srcSet={`${process.env.PUBLIC_URL + './polyankaPhoto@2x.jpg'} 2x, ${process.env.PUBLIC_URL + './polyankaPhoto@3x.jpg'} 3x`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
