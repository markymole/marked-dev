import React, { useEffect, useState } from 'react';
import Loading from '../../components/preloader';
import App from '../../App';

const Index = () => {
  const [preload, setPreload] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = document.querySelectorAll('img');
    const promises = [];

    images.forEach((image) => {
      const promise = new Promise((resolve) => {
        if (image.complete) {
          resolve();
        } else {
          image.addEventListener('load', resolve);
        }
      });
      promises.push(promises);
    });

    Promise.all(promises).then(() => {
      setTimeout(() => {
        setPreload(false);
      }, 3000);
      setTimeout(() => {
        setLoading(false);
      }, 2350);
    });
  }, []);

  return (
    <div>
      <div className="index-loading-container">
        {preload && <Loading loading={loading} />}
      </div>
      <div className={`index-app-container ${!preload ? 'show' : ''}`}>
        <App />
      </div>
    </div>
  );
};

export default Index;
