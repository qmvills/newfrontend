import React from 'react';
import { Link } from 'react-router-dom';
import Yearone from './adminlist/yearone';
import Yeartwo from './adminlist/yeartwo';
import Yearthree from './adminlist/yearthree';
import Yearfour from './adminlist/yearfour';
import Irregular from './adminlist/irregular';


const YearList = () => {
  return (
    <div className="flex flex-col space-y-4 px-4 pt-4">
      <Link
        to={'/yearone'} 
        className="year-card flex justify-between items-center p-4 bg-gray-100 rounded-md hover:bg-gray-200"
      >
        <div className="text-lg font-medium">FIRST YEAR</div>
        <div className="flex items-center">
          <span className="inline-block h-4 w-4 transform rotate-90 text-green-500"></span>
        </div>
      </Link>
      <Link
        to={'/yeartwo'}
        className="year-card flex justify-between items-center p-4 bg-gray-100 rounded-md hover:bg-gray-200"
      >
        <div className="text-lg font-medium">SECOND YEAR</div>
        <div className="flex items-center">
          <span className="inline-block h-4 w-4 transform rotate-90 text-green-500"></span>
        </div>
      </Link>
      <Link
        to={'/yearthree'}
        className="year-card flex justify-between items-center p-4 bg-gray-100 rounded-md hover:bg-gray-200"
      >
        <div className="text-lg font-medium">THIRD YEAR</div>
        <div className="flex items-center">
          <span className="inline-block h-4 w-4 transform rotate-90 text-green-500"></span>
        </div>
      </Link>
      <Link
        to={'/yearfour'}
        className="year-card flex justify-between items-center p-4 bg-gray-100 rounded-md hover:bg-gray-200"
      >
        <div className="text-lg font-medium">FOURTH YEAR</div>
        <div className="flex items-center">
          <span className="inline-block h-4 w-4 transform rotate-90 text-green-500"></span>
        </div>
      </Link>
      <Link
        to={'/irregular'}
        className="year-card flex justify-between items-center p-4 bg-gray-100 rounded-md hover:bg-gray-200"
      >
        <div className="text-lg font-medium">IRREGULAR STUDENTS</div>
        <div className="flex items-center">
          <span className="inline-block h-4 w-4 transform rotate-90 text-green-500"></span>
        </div>
      </Link>
    </div>
  );
};

export default YearList;
