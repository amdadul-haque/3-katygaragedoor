import React from 'react';
import Link from 'next/link';
import SectionTitle from './SectionTitle';

const InstallAndRepair = () => {
  return (

    <div className='py-20' id='installandrepair'>
      <SectionTitle title="Installation & Repair" />
      <div className="flex flex-col md:flex-row md:gap-10 items-center justify-center">
        <div className="md:w-1/2 md:mr-4 mb-4 md:mb-0">
          <Link href="https://veterangaragedoor.com/garage-doors/" target='_blank' passHref>
            <img src="/images/install.jpg" alt="Installation" />
          </Link>
        </div>
        <div className="md:w-1/2">
          <Link href="https://veterangaragedoor.com/repair/" target='_blank' passHref>
            <img src="/images/repair.jpg" alt="Repair" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstallAndRepair;
