import React from 'react';
import SectionTitle from './SectionTitle';

const garageDoorSpringInfo = [
  {
      title: "Understanding the Importance of Garage Door Springs",
      description: "Garage door springs are under immense tension, supporting the weight of the door as it opens and closes. This constant tension and usage can cause wear and tear on the springs over time, eventually leading to failure. When a spring breaks, it can compromise the balance and stability of the door, posing safety risks to you and your family. Prompt replacement of damaged or worn-out springs is essential to ensure the safe and efficient operation of your garage door."
  },
  {
      title: "Signs That Your Garage Door Springs Need Replacement",
      description: "There are several warning signs that indicate your garage door springs may need replacement. These include difficulty opening or closing the garage door, uneven movement or jerking motions when operating the door, loud banging or popping noises coming from the garage door, and visible signs of wear or damage to the springs, such as rust or corrosion. If you notice any of these signs, it's essential to contact a professional garage door technician in Katy, Texas, to assess the situation and perform necessary spring replacement."
  },
  {
      title: "The Importance of Professional Replacement Services",
      description: "Garage door spring replacement is a complex and potentially dangerous task that requires specialized knowledge and tools. Attempting to replace springs yourself can lead to serious injury or further damage to your garage door system. Professional technicians in Katy have the training and expertise to safely and effectively replace garage door springs, ensuring that your door operates smoothly and securely."
  },
  {
      title: "Benefits of Professional Garage Door Spring Replacement",
      description: "Safety: Professional technicians prioritize safety during spring replacement, minimizing the risk of accidents or injuries. Efficiency: Experienced technicians can complete spring replacement quickly and efficiently, minimizing downtime for your garage door. Quality: Professional replacement services use high-quality springs and materials, ensuring long-lasting."
  }
];


const Replacement = () => {
  

  return (
    <div className="py-16 pt-20" id='replacement'>
      <SectionTitle title="Replacement" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {garageDoorSpringInfo.map((section, index) => (
          <div key={index} className="border border-gray-200 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
            <p className="text-text-gray">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Replacement;
