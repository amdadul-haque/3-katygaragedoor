import React from 'react'

import SectionTitle from './SectionTitle';
import { FaTools, FaHammer, FaShieldAlt, FaUserFriends } from 'react-icons/fa';

const garageDoorRepairContent = [
  {
    title: "The Importance of Timely Repairs",
    description: "A malfunctioning garage door poses numerous risks, including safety hazards and potential security breaches. Whether it's a broken spring, damaged panel, or malfunctioning opener, addressing these issues promptly is essential to prevent accidents and protect your property. Ignoring minor problems can lead to more extensive damage and costly repairs down the line. Therefore, investing in timely garage door repair services is crucial for maintaining the integrity and functionality of your garage door system.",
    icon: FaTools
  },
  {
    title: "Expertise and Experience",
    description: "Professional garage door repair technicians in Katy, Texas, possess the expertise and experience necessary to diagnose and resolve a wide range of issues efficiently. With their in-depth knowledge of garage door mechanisms and components, they can accurately assess the problem and recommend the most appropriate solutions. Whether it's repairing broken springs, realigning tracks, or replacing damaged panels, skilled technicians have the tools and expertise to perform repairs safely and effectively.",
    icon: FaHammer
  },
  {
    title: "Safety First Approach",
    description: "Safety is paramount when it comes to garage door repairs. Attempting to fix garage door issues without the proper knowledge and equipment can result in accidents or further damage. Professional repair services in Katy prioritize safety at every step of the repair process. From conducting thorough inspections to using proper safety gear and techniques, technicians ensure that repairs are carried out with the highest level of safety standards in mind. By entrusting your garage door repairs to professionals, you can have peace of mind knowing that the job will be done safely and correctly.",
    icon: FaShieldAlt
  },
  {
    title: "Quality Workmanship and Reliable Service",
    description: "When it comes to garage door repairs, quality workmanship and reliable service are non-negotiable. Professional repair services in Katy are committed to delivering superior results that exceed customer expectations.",
    icon: FaUserFriends
  }
];



const Repair = () => {
  return (
    <div className='py-16 pt-20' id="repair">
      <SectionTitle title="Repair" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {garageDoorRepairContent.map((feature, index) => (
          <div
            key={index}
            className="flex items-center space-x-4"
          >
            <div className="p-4 bg-gray-100 rounded-full">
              {<feature.icon className="text-2xl md:text-3xl text-brand-main" />}
            </div>
            <div>
              <h3 className="textlg md:text-xl text-text-dark font-semibold mb-3">{feature?.title}</h3>
              <p className="text-base text-text-light">{feature?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Repair