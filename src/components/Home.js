import React from 'react';

const Home = () => {
  return (
    <>
      <div className='container img-bg1-home'>
        <h1 className='h1-home'>Model S</h1>
        <p className='p-home'>
          Order online for <span>touchless delivery</span>.
        </p>
        <div className='btn-div'>
          <button className='bg-black'>custom order</button>
          <button>Existing Inventary</button>
        </div>
      </div>
    </>
  );
};

export default Home;
