import React from 'react';
import { Check } from 'lucide-react'; // Import the Check icon from lucide-react

const CheckList = () => {
  const items = [
    'lorem ipsum dummu text',
    'lorem ipsum dummu text',
    'lorem ipsum dummu text',
  ];

  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center text-white">
          <Check className="w-5 h-5 text-green-500 mr-2" />
          {item}
        </li>
      ))}
    </ul>
  );
};

export default CheckList;