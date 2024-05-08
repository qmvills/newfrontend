import React from 'react';
import { Link } from 'react-router-dom';
import First from './adminreceive/first';
import Second from './adminreceive/second';
import Third from './adminreceive/third';
import Fourth from './adminreceive/fourth';



const YearList = () => {
  return (
    <div className="space-y-4 px-32 pt-4 mt-20 ">
      <Link
        to={'/first'} 
        className="year-card flex justify-between items-center p-6 bg-zinc-800 rounded-md hover:bg-green-700"
      >
        <div className="text-3xl font-bold text-white">FIRST YEAR</div>
   
      </Link>
      <Link
        to={'/second'}
        className="year-card flex justify-between items-center p-6   bg-zinc-800 rounded-md hover:bg-green-700"
      >
        <div className="text-3xl font-bold text-white">SECOND YEAR</div>

      </Link>
      <Link
        to={'/third'}
        className="year-card flex justify-between items-center p-6  bg-zinc-800 rounded-md hover:bg-green-700"
      >
        <div className="text-3xl font-bold text-white">THIRD YEAR</div>

      </Link>
      <Link
        to={'/fourth'}
        className="year-card flex justify-between items-center p-6  bg-zinc-800 rounded-md hover:bg-green-700"
      >
        <div className="text-3xl font-bold text-white">FOURTH YEAR</div>

      </Link>
      <Link
        to={'/irregular'}
        className="year-card flex justify-between items-center p-6  bg-zinc-800 rounded-md hover:bg-green-00"
      >
        <div className="text-3xl font-bold text-white">IRREGULAR STUDENTS</div>

      </Link>
    </div>
  );
};

export default YearList;
