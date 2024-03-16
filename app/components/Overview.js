import React from 'react';
import SectionTitle from './SectionTitle';

const Overview = () => {

  return (
    <div className="py-16 pt-20" id='overview'>
      <SectionTitle title="Overview" />
      <div className=''>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10'>
          <div className='flex items-center'>
            <p className='text-center sm:text-left text-text-light text-base md:text-lg'>Located just west of Houston, Texas, Katy is a charming city with rich historical and recreational offerings. At the Katy Heritage Society Railroad Museum, visitors can explore fascinating train-related exhibits housed within a meticulously restored depot, with an old caboose railroad car on display outside. Nearby, the Katy Heritage Museum showcases vintage farming equipment and a collection of antiques, providing insight into the area's agricultural heritage.
              <br />
              <br />
              Nature enthusiasts can escape to the serene Mary Jo Peckham Park, where lush foliage surrounds a picturesque lake teeming with fish. For outdoor recreation, Katy Park offers well-maintained baseball fields and expansive picnic areas, perfect for enjoying leisurely activities with family and friends. Whether delving into history or embracing the beauty of nature, Katy invites visitors to discover its unique charm and attractions.
            </p>
          </div>
          <div className='hover:scale-[1.02] transition-all duration-300'>
            <img src="/images/2.jpg" alt="" className='rounded shadow h-[400px] w-full' />
          </div>
        </div>
        <div className='grid grid-cols-2 gap-6 md:gap-10 mt-10'>
          <div className='hover:scale-[1.02] transition-all duration-300'>
              <img src="/images/1.jpeg" alt="" className='rounded shadow w-full' />
          </div>
          <div className='hover:scale-[1.02] transition-all duration-300'>
            <img src="/images/3.jpeg" alt="" className='rounded shadow w-full' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
