import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

function Secondyear() {
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [otherPayables, setOtherPayables] = useState([]); // State for additional payables
  const [selectedPaymentType, setSelectedPaymentType] = useState(null); // Track selected payment type

  const handleClick = (studentId) => {
    setSelectedStudentId(studentId);
    console.log('Student selected:', studentId);
  };

  const handleSubmitClick = (studentId) => {
    console.log('Submit to Admin:', studentId);
    // Implement deletion logic if needed
  };
  const handleReceiveClick =(studentId) => {
    console.log('Receive', studentId);
  }

  const handleReceivePayment = (student, enteredAmount) => {
    let updatedOtherPayables = [...otherPayables];
    let remainingBalance = 0;

    if (selectedPaymentType === 'monthlyDues') {
      remainingBalance = student.totalPayable - enteredAmount;
    } else {
      // Find the payable object based on the selected payment type
      const payable = updatedOtherPayables.find((p) => p.description === selectedPaymentType);

      if (payable) {
        payable.amount = enteredAmount;
        updatedOtherPayables = updatedOtherPayables.map((p) => (p.description === payable.description ? payable : p));
      }

      // Calculate remaining balance after deducting monthly dues and updated other payables
      const totalOtherPayablesAmount = updatedOtherPayables.reduce((sum, p) => sum + p.amount, 0);
      remainingBalance = student.totalPayable - student.monthlyDues - totalOtherPayablesAmount;
    }

    const updatedStudent = {
      ...student,
      amountPaid: enteredAmount,
      balance: remainingBalance,
    };

    // Update the otherPayables state with the updated list
    setOtherPayables(updatedOtherPayables);

    // Log the updated student data
    console.log('Payment received for student:', updatedStudent);
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
        amountPaid: 0,
        balance: 250,
  
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
        amountPaid: 0,
        balance: 100,
  
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
        amountPaid: 0,
        balance: 250,
  
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
        balance: 400, 
      },
  ];

  const paymentOptions = [
    { value: 'monthlyDues', label: 'Monthly Dues' },
    { value: 'otherPayables', label: 'Kaliga' },
    { value: 'otherPayablesd', label: 'Fines' },
    ...otherPayables.map((payable) => ({
      value: payable.description,
      label: payable.description,
    })),
  ];
  const totalAmountPayable = data.reduce((acc, student) => acc + student.totalPayable, 0);
  const totalAmountPaid = data.reduce((acc, student) => acc + student.amountPaid, 0);
  

  return (
    <div className="flex flex-col">

      <div className="flex flex-col items-center">
      <h1 className="mt-8 px-10 text-3xl font-bold mb-4">BSIT SECOND YEAR</h1>
      <p className='text-black mb-4'>Treasurer: Gallegos, Jairah Jave </p> {/*coming from database*/}

      <div className="-overflow-x  scrollbar-hidden border-4 border-zinc-800 rounded-md">
        <Link to = {'/thome'}><IoMdArrowRoundBack className="ml-6 mt-2 " color='green'size={28} /></Link>
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-200 text-left text-sm font-medium">
              <th className="px-4 py-2">Id Number</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Gender</th>
              <th className="px-4 py-2">User Type</th>
              <th className="px-4 py-2">Monthly Dues</th>
              <th className="px-4 py-2">Other Payables</th>
              <th className="px-4 py-2">Total Payable</th>
              <th className="px-4 py-2">Amount Paid</th>
              <th className="px-4 py-2">Balance</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through the sample data */}
            {data.map((student) => (
              <tr
                key={student.id}
                className={
                  selectedStudentId === student.id ? 'bg-gray-100 cursor-pointer hover:bg-gray-200' : 'bg-white cursor-pointer hover:bg-gray-100'
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
                <td className="px-4 py-2">
                  <select
                    className="border rounded-md px-2 py-1 w-full"
                    value={selectedPaymentType}
                    onChange={(e) => setSelectedPaymentType(e.target.value)}
                  >
                    <option value="">Select Payment Type</option>
                    {paymentOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <input
                    type="number"
                    className="border rounded-md px-2 py-1 w-full"
                    placeholder="Enter amount"
                    onChange={(e) => handleReceivePayment(student, e.target.value)}
                  />
                </td>
                <td className="px-4 py-2">{student.balance}</td>
                <td className="px-4 py-2">
                  <button
                    className="text-green-500 font-bold hover:text-red-700"
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
                <td className="px-4 py-2 font-bold">{totalAmountPayable}</td>
                <td className="px-4 py-2" >   <button
                    className="text-green-500 font-bold hover:text-red-700"
                    onClick={() => handleSubmitClick()}
                  >
                    Submit
                  </button>
                  </td>

                </tr>
          </tbody>
        </table>
      </div>
    </div></div>
  );
}

export default Secondyear;
