import React, { useState, useEffect } from 'react';
import Header from '../header'; // Assuming Header component exists

function Fourthyear() {
    const [selectedStudentId, setSelectedStudentId] = useState(null);
    const [isEditing, setIsEditing] = useState(null); // Track edit state for each student
    const [otherPayables, setOtherPayables] = useState([]); // State for additional payables
    const [selectedPaymentType, setSelectedPaymentType] = useState(null); // Track selected payment type
  
    const handleClick = (studentId, amountPaid) => {
      setSelectedStudentId(studentId);
      // Implement logic to handle student selection and amount paid update (if applicable)
      console.log('Student selected:', studentId, 'Amount paid:', amountPaid);
    };
  
    const handleEditClick = (studentId) => {
      setIsEditing((prev) => (prev === studentId ? null : studentId));
    };
  
    const handleSubmitClick = (studentId) => {
      // Implement logic to delete student using onStudentSelect prop (if needed)
      console.log('Submit amount:', studentId);
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
        name: 'Torayno, Jaime Jr.',
        gender: 'Male',
        usertype: 'Officer',
        monthlyDues: 0,
        otherPayables: [{ description: 'Kaliga', amount: 300 },
                       { description: 'Fines', amount: 50 }
                       ],
        totalPayable: 350,
        amountPaid: 0,
      },
      
  
  
    ];
    const paymentOptions = [
      { value: 'monthlyDues', label: 'Monthly Dues' },
      { value: 'otherpayables', label: 'Kaliga' },
      { value: 'otherpayables', label: 'Fines' },
      ...otherPayables.map((payable) => ({
        value: payable.description,
        label: payable.description,
      })),
    ];
  
    return (
      <div className="flex flex-col">
        <Header />
        <div className="-overflow-x scrollbar-hidden">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-200 text-left text-sm font-medium">
                <th className="px-4 py-2">Id Number</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Gender</th>
                <th className="px-4 py-2">Year Level</th>
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
                      <div>
                          <select
                          className="border rounded-md px-2 py-1 w-full"
                          value={selectedPaymentType}
                          onChange={(e) => setSelectedPaymentType(e.target.value)}
                          >
                          {paymentOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                              {option.label}
                              </option>
                          ))}
                          </select>
                          <input
                          type="number"
                          className="border rounded-md px-2 py-1 w-full"
                          onChange={(e) => {
                              const enteredAmount = e.target.value;
                              let remainingBalance;
  
                              if (selectedPaymentType === 'monthlyDues') {
                              remainingBalance = student.totalPayable - enteredAmount;
                              } else {
                              // Find the payable object based on the selected payment type
                              const payable = otherPayables.find(
                                  (p) => p.description === selectedPaymentType
                              );
  
                              // Update the amount of the specific payable
                              payable.amount = enteredAmount;
  

                              }
  
                              const updatedStudent = {
                              ...student,
                              amountPaid: enteredAmount,
                              balance: remainingBalance,
                              };
  
                              const updatedData = data.map((item) =>
                              item.id === student.id ? updatedStudent : item
                              );
  
                              setSelectedStudentId(updatedStudent.id);
                              handleClick(updatedStudent.id, enteredAmount);
                          }}
                          />
                      </div>
                    )}
                  </td>
              
                  <td className="px-4 py-2">
          
                    <button
                      className="text-green-500 font-bold hover:text-red-700"
                      onClick={() => handleSubmitClick(student.id)}
                    >
                      Submit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

export default Fourthyear;
