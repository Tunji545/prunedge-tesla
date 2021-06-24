import React from 'react';
import arrow from '../images/arrowhead.png';
import { useSpring, animated } from 'react-spring';

const Home = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1000,
  });
  return (
    <>
      <div className='img-bg1-home'>
        <h1 className='h1-home'>Model S</h1>
        <p className='p-home'>
          Order online for <span>touchless delivery</span>.
        </p>
        <div className='btn-div'>
          <button className='bg-black'>custom order</button>
          <button>Existing Inventary</button>
        </div>
        <animated.img
          src={arrow}
          alt='arrowhead.png'
          width='20'
          height='20'
          className='arrow'
          style={props}
        />
      </div>
      <div className='img-bg2-home'>
        <h1 className='h1Y-home'>Model Y</h1>
        <p className='p-home'>
          Order online for <span>touchless delivery</span>.
        </p>
        <div className='btnY-div'>
          <button className='bg-black'>custom order</button>
          <button>Existing Inventary</button>
        </div>
      </div>
      <div className='img-bg3-home'>
        <h1 className='h1-home'>Model 3</h1>
        <p className='p-home'>
          Order online for <span>touchless delivery</span>.
        </p>
        <div className='btn-div'>
          <button className='bg-black'>custom order</button>
          <button>Existing Inventary</button>
        </div>
      </div>
      <div className='img-bg4-home'>
        <h1 className='h1-home'>Model X</h1>
        <p className='p-home'>
          Order online for <span>touchless delivery</span>.
        </p>
        <div className='btn-div'>
          <button className='bg-black'>custom order</button>
          <button>Existing Inventary</button>
        </div>
      </div>
      <div className='img-bg5-home'>
        <h1 className='h1-home'>Solar Panels</h1>
        <p className='p-home'>Lowest cost lowest panels in America</p>
        <div className='btn5-div'>
          <button className='bg-black'>order now</button>
          <button>learn more</button>
        </div>
      </div>
      <div className='img-bg6-home'>
        <h1 className='h1-home'>Solar Roofs</h1>
        <p className='p-home'>Produce clean energy from your roof.</p>
        <div className='btn5-div'>
          <button className='bg-black'>order now</button>
          <button>learn more</button>
        </div>
      </div>
      <div className='img-bg7-home'>
        <h1 className='h7-home'>Accessories</h1>
        <button className='bg7-black'>Shop Now</button>
      </div>
    </>
  );
};

export default Home;
