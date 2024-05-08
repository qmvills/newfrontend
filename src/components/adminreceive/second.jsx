import React, { useState, useEffect } from 'react';
import Header from '../header'; 
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Receive from '../../admin/receive';

function Second() {
    const [selectedStudentId, setSelectedStudentId] = useState(null);
    const [isEditing, setIsEditing] = useState(null);
    const [otherPayables, setOtherPayables] = useState([]); 
  
    const handleClick = (studentId, amountPaid) => {
      setSelectedStudentId(studentId);
 
      console.log('Student selected:', studentId, 'Amount paid:', amountPaid);
    };
  
    const handleEditClick = (studentId) => {
      console.log('Edit student:', studentId);
    };
    const handleDeleteClick = (studentId) => {
    
      console.log('Delete student:', studentId);
    };
  
    const handleReceiveClick = (studentId) => {
      
      console.log('Receive payable:', studentId);
    };
  


    // Sample student data
    const data = [
      {
        id: 1,
        name: 'DAYTIC, LIZA MAE',
        gender: 'FEMALE',
        usertype: 'STUDENT',
        monthlyDues: 250,
        otherPayables: [{ description: 'KALIGA', amount: 300 }],
        totalPayable:250,
        amountPaid: 300,
 
  
      },
      {
        id: 2,
        name: 'GALLEGOS, JAIRAH JAVE',
        gender: 'FEMALE',
        usertype: 'TREASURER',
        monthlyDues: 0,
        otherPayables: [
          { description: 'FINES', amount: 100 },
          { description: 'KALIGA', amount: 300 },
        ],
        totalPayable: 100,
        amountPaid: 300,

  
      },
      {
        id: 3,
        name: 'MONTEFALCON, JASPER VINCE',
        gender: 'MALE',
        usertype: 'STUDENT',
        monthlyDues: 250,
        otherPayables: [
          { description: 'FINES', amount: 100 },
          { description: 'KALIGA', amount: 300 },
        ],
        totalPayable: 250,
        amountPaid: 400,
        
  
      },
      {
        id: 4,
        name: 'VILLAREAL, QUEEN MARY',
        gender: 'FEMALE',
        usertype: 'OFFICER',
        monthlyDues: 0,
        otherPayables: [
          { description: 'FINES', amount: 100 },
          { description: 'KALIGA', amount: 300 },
        ],
        totalPayable: 400,
        amountPaid: 0,
     
  
      },

    ];
    
    const totalAmountPayable = data.reduce((acc, student) => acc + student.totalPayable, 0);
    const totalAmountPaid = data.reduce((acc, student) => acc + student.amountPaid, 0);
  
    return (
        <div>
             <Header />
        <div className="flex flex-col items-center">
  
     
        <h1 className="mt-8 px-10 text-3xl font-bold mb-4">Receive Amount from Second Year</h1>

        <p className='text-black mb-4'>Treasurer: Gallegos, Jairah Jave</p> {/*coming from database*/}

        <div className="-overflow-x  scrollbar-hidden border-4 border-zinc-800 rounded-md">
        <Link to = {'/receive'}><IoMdArrowRoundBack className="ml-6 mt-2 " color='green'size={28} /></Link>
          <table className="table-auto w-full ">
            <thead>
              <tr className="bg-gray-200  h-20 text-left  text-1xl font-medium">
                <th className="px-4 py-2">Id Number</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Gender</th>
                <th className="px-4 py-2">User Type</th>
                <th className="px-4 py-2">Monthly Dues</th>
                <th className="px-4 py-2">Other Payables</th>
                <th className="px-4 py-2">Total Payable</th>
                <th className="px-4 py-2">Amount Paid</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              
              {/* Map through the sample data */}
              {data.map((student) => (
                <tr
                  key={student.id}
                  className={
                    selectedStudentId === student.id
                      ? 'bg-gray-100 cursor-pointer hover:bg-gray-200'
                      : 'bg-white cursor-pointer hover:bg-gray-100'
                  }
                  onClick={() => handleClick(student.id)}
                >
                  <td className="px-4 py-2">{student.id}</td>
                  <td className="px-4 py-2">{student.name}</td>
                  <td className="px-4 py-2">{student.gender}</td>
                  <td className="px-4 py-2">{student.usertype}</td>
                  <td className="px-4 py-2">{student.monthlyDues}</td>
                  <td className="px-4 py-2">
                  {student.otherPayables.map((payable) => (
                      <p key={payable.description}>
                        {payable.description}: {payable.amount}
                      </p>
                    ))}
                  </td>
                  <td className="px-4 py-2">{student.totalPayable}</td>
                  <td className="px-4 py-2">{student.amountPaid}</td>
                  <td className="px-4 py-2">
                    <button
                      className="text-blue-500 hover:text-blue-700 mr-2"
                      onClick={() => handleEditClick(student.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleReceiveClick(student.id)}
                    >
                      Delete
                    </button></td>
         
                </tr>
              ))}
                  <tr className="bg-gray-100">
                <td className="px-4 py-2 text-right font-bold">Total</td>
                <td className="px-4 py-2" />
                <td className="px-4 py-2" />
                <td className="px-4 py-2" />
                <td className="px-4 py-2" />
                <td className="px-4 py-2" />
                <td className="px-4 py-2 font-bold">{totalAmountPayable}</td>
                <td className="px-4 py-2 font-bold">{totalAmountPaid}</td>
                <td className="px-4 py-2">                   
                 <button
                      className="text-green-700 font-bold hover:text-red-700"
                      onClick={() => handleReceiveClick()}
                    >
                      Receive
                </button></td>
                
              </tr>
  
            </tbody>
          </table>
        </div>
      </div></div>
    );
  }
  
  
export default Second;
