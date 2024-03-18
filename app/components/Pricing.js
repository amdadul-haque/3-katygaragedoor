import React from 'react';
import SectionTitle from './SectionTitle';


const pricing = [
  { zipCode: "77493", serviceCallAndEstimate: "Free/No Charge", repair: "$125-$295", springReplacement: "$195-$350", openerInstall: "$825-$895", garageDoorInstalled: "$1500-$1700" },
  { zipCode: "77449", serviceCallAndEstimate: "Free/No Charge", repair: "$125-$295", springReplacement: "$195-$350", openerInstall: "$825-$895", garageDoorInstalled: "$1500-$1700" },
  { zipCode: "77494", serviceCallAndEstimate: "Free/No Charge", repair: "$125-$295", springReplacement: "$195-$350", openerInstall: "$825-$895", garageDoorInstalled: "$1500-$1700" },
  { zipCode: "77450", serviceCallAndEstimate: "Free/No Charge", repair: "$125-$295", springReplacement: "$195-$350", openerInstall: "$825-$895", garageDoorInstalled: "$1500-$1700" },
  { zipCode: "77094", serviceCallAndEstimate: "Free/No Charge", repair: "$125-$295", springReplacement: "$195-$350", openerInstall: "$825-$895", garageDoorInstalled: "$1500-$1700" }
];

const tableHead = [
  "Zip Code",
  "Service Call & Estimate",
  "Repair",
  "Spring Replacement",
  "7' Liftmaster Opener Install (LM)",
  "16x7 Garage Door Installed (25G)"
];



const Pricing = () => {
  return (
    <div className="my-20 mb-28 ">
      <SectionTitle title="Price Range for Garage Door Service in the City of Katy Texas" />
      <div className='w-full overflow-x-scroll lg:overflow-hidden'>
        <table className="border-collapse border border-gray-400 mx-auto"
          
        >
          <thead className='w-full overflow-x-scroll'>
            <tr className="bg-brand-main text-white">
              {
                tableHead.map((item, index) => (
                  <th className="text-sm sm:text-base border border-gray-400 px-2 sm:px-4 py-2 text-center">{item}</th>
                ))
              }
            </tr>
          </thead>

          <tbody className='w-full'>
            {pricing.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100 hover:bg-gray-200' : 'bg-white hover:bg-gray-200'}>
                <td className="text-sm sm:text-base border border-gray-400 px-2 sm:px-4 py-2 text-center break-keep">{item.zipCode}</td>
                <td className="text-sm sm:text-base border border-gray-400 px-2 sm:px-4 py-2 text-center break-keep">{item.serviceCallAndEstimate}</td>
                <td className="text-sm sm:text-base border border-gray-400 px-2 sm:px-4 py-2 text-center break-keep">{item.repair}</td>
                <td className="text-sm sm:text-base border border-gray-400 px-2 sm:px-4 py-2 text-center break-keep">{item.springReplacement}</td>
                <td className="text-sm sm:text-base border border-gray-400 px-2 sm:px-4 py-2 text-center break-keep">{item.openerInstall}</td>
                <td className="text-sm sm:text-base border border-gray-400 px-2 sm:px-4 py-2 text-center break-keep">{item.garageDoorInstalled}</td>
              </tr>
            ))}
          </tbody>
        </table >
      </div>

    </div>
  );
};

export default Pricing;
