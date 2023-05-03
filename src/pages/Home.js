import React from 'react';
import Carousel from './Carousel';

const App = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <h1 style={{ textAlign: 'center' }}>ÄÄÄtelöä namskutarallaa</h1>
      <Carousel />
      <br />
      <div className='runo' style={{ textAlign: 'center' }}>
        <p style={{ whiteSpace: 'pre-line', fontWeight: 'bold' }}>
          Jäätelö, makea keidas kuumiin päiviin,
          sulaa hitaasti, paljastaen kermaisuuden,
          tarjoaa väriloiston jokaiseen makuun.
        </p>
        <p style={{ whiteSpace: 'pre-line', fontWeight: 'bold' }}>
          Tärinä toffee, mansikka unelma,
          suklaa suudelma, jäätelö on elämän ilo.
        </p>
      </div>
    </div>
  );
};

export default App;