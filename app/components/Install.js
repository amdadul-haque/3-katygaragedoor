import React from 'react'
import SectionTitle from './SectionTitle';
import { FaDoorOpen, FaTools, FaLock, FaChartLine } from 'react-icons/fa';

const garageDoorInstallationContent = [
  {
    title: "Choosing the Right Garage Door:",
    description: "When it comes to garage door installation, selecting the right door for your home is crucial. With a wide variety of styles, materials, and features available, homeowners in Katy have numerous options to choose from. Whether you prefer the classic elegance of a carriage-style door, the modern appeal of a sleek aluminum door, or the durability of a steel door, professional installers can help you find the perfect match for your home's architecture and your personal preferences.",
    icon: FaDoorOpen
  },
  {
    title: "Expert Installation Services:",
    description: "Professional garage door installers in Katy, Texas, possess the skills, knowledge, and experience needed to ensure a seamless and efficient installation process. From precise measurements to expert assembly and installation, these professionals take care of every detail to ensure that your new garage door fits perfectly and operates smoothly. With their expertise, you can trust that your new garage door will be installed correctly and securely, providing years of reliable performance.",
    icon: FaTools
  },
  {
    title: "Enhanced Security and Convenience:",
    description: "In addition to enhancing the aesthetic appeal of your home, a new garage door also offers improved security and convenience. Modern garage door models come equipped with advanced features such as remote-controlled operation, keypad entry systems, and smart home integration, allowing you to control access to your garage with ease. With professional installation services, you can enjoy the added peace of mind knowing that your garage door is equipped with the latest security features and technologies.",
    icon: FaLock
  },
  {
    title: "Increased Property Value:",
    description: "Investing in a new garage door installation is not only a smart decision for your home's aesthetics and functionality but also for its overall value. A well-designed and properly installed garage door can significantly enhance the curb appeal of your property, making it more attractive to potential buyers should you ever decide to sell. By investing in professional installation services, you're not only improving your property's appearance but also increasing its market value.",
    icon: FaChartLine
  }
];



const Install = () => {

  return (
    <div className='py-16 pt-20' id='install'>
      <SectionTitle title='Install'/>
      <div className='grid gap-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'>
        {garageDoorInstallationContent.map((feature, index) => (
          <div key={index} className='flex flex-col items-center border hover:border-brand-main px-4 py-6 gap-6 hover:shadow-lg  hover:scale-105 transition-all duration-300'>
            <feature.icon className='text-[40px] text-brand-main' />
            <h4 className='text-center text-text-dark font-semibold text-2xl'>{feature.title}</h4>
            <p className='text-center text-text-light'>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Install
