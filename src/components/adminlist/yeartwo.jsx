import React, { useState, useEffect } from 'react';
import Header from '../header'; // Assuming Header component exists

function Yeartwo() {
    const [selectedStudentId, setSelectedStudentId] = useState(null);
    const [isEditing, setIsEditing] = useState(null); // Track edit state for each student
    const [otherPayables, setOtherPayables] = useState([]); // State for additional payables
  
    const handleClick = (studentId, amountPaid) => {
      setSelectedStudentId(studentId);
      // Implement logic to handle student selection and amount paid update (if applicable)
      console.log('Student selected:', studentId, 'Amount paid:', amountPaid);
    };
  
    const handleEditClick = (studentId) => {
      setIsEditing((prev) => (prev === studentId ? null : studentId));
    };
  
    const handleReceiveClick = (studentId) => {
      // Implement logic to delete student using onStudentSelect prop (if needed)
      console.log('Delete student:', studentId);
    };
  
    const handleAddPayable = (studentId) => {
      setOtherPayables((prevPayables) => [
        ...prevPayables,
        { description: '', amount: 0 }, // Add new empty payable object
      ]);
    };
  
    const handlePayableChange = (index, event) => {
      const { name, value } = event.target;
      setOtherPayables((prevPayables) =>
        prevPayables.map((payable, i) =>
          i === index ? { ...payable, [name]: value } : payable
        )
      );
    };
  
    const handlePayableDelete = (index) => {
      setOtherPayables((prevPayables) => prevPayables.filter((_, i) => i !== index));
    };
  
    const handleSavePayables = (studentId) => {
      // Implement logic to save updated payables to your data source (e.g., database)
      console.log('Save payables for student:', studentId, otherPayables);
      // Update local state after successful save
      setIsEditing(null); // Exit edit mode
      setOtherPayables(
        otherPayables.map((payable) => ({ ...payable, description: '', amount: 0 })) // Reset payables to empty state
      );
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
        totalPayable: 250,
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
          name: 'MONTEFALCON, JASPER',
          gender: 'MALE',
          usertype: 'STUDENT',
          monthlyDues: 250,
          otherPayables: [
            { description: 'FINES', amount: 100 },
            { description: 'KALIGA', amount: 300 },
          ],
          totalPayable: 350,
          amountPaid: 300,
    
        },
        {
            id: 4,
            name: 'VILLAREA, QUEEN MARY',
            gender: 'FEMALE',
            usertype: 'OFFICER',
            monthlyDues: 0,
            otherPayables: [
              { description: 'FINES', amount: 100 },
              { description: 'KALIGA', amount: 300 },
            ],
            totalPayable: 0,
            amountPaid: 400,
      
          },
  
  
    ];
    const totalAmountPayable = data.reduce((acc, student) => acc + student.totalPayable, 0);
    const totalAmountPaid = data.reduce((acc, student) => acc + student.amountPaid, 0);
  
    return (
        <div>
             <Header />
      <div className="flex flex-col items-center">
     
        <h1 className="mt-8 px-10 text-3xl font-semibold mb-4">Second Year</h1>   
        <div className="-overflow-x  scrollbar-hidden border border-black">
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
                    {isEditing === student.id ? (
                      <div>
                        {otherPayables.map((payable, index) => (
                          <div key={index} className="flex items-center mb-2">
                            <input
                              type="text"
                              className="mr-2 border rounded-md px-2 py-1"
                              name="description"
                              value={payable.description}
                              onChange={(e) => handlePayableChange(index, e)}
                            />
                            <input
                              type="number"
                              className="border rounded-md px-2 py-1"
                              name="amount"
                              value={payable.amount}
                              onChange={(e) => handlePayableChange(index, e)}
                            />
                            <button
                              className="text-red-500 hover:text-red-700 ml-2"
                              onClick={() => handlePayableDelete(index)}
                            >
                              Delete
                            </button>
                          </div>
                        ))}
                        <button
                          className="text-blue-500 hover:text-blue-700"
                          onClick={() => handleAddPayable(student.id)}
                        >
                          Add Payable
                        </button>
                      </div>
                    ) : (
                      student.otherPayables.map((payable) => (
                        <p key={payable.description}>
                          {payable.description}: {payable.amount}
                        </p>
                      ))
                    )}
                  </td>
                  <td className="px-4 py-2">{student.totalPayable}</td>
                  <td className="px-4 py-2">
                    {isEditing === student.id ? (
                      <input
                        type="number"
                        className="border rounded-md px-2 py-1 w-full"
                        onChange={(e) => handleClick(student.id, e.target.value)}
                      />
                    ) : (
                      student.amountPaid
                    )}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      className="text-green-700 font-bold hover:text-red-700"
                      onClick={() => handleReceiveClick(student.id)}
                    >
                      Receive
                    </button>
                  </td>
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
                <td className="px-4 py-2" />
                
              </tr>
  
            </tbody>
          </table>
        </div>
      </div></div>
    );
  }
  
  
export default Yeartwo;
