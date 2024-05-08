import React, { useState } from 'react';
import Header from '../components/header';

const Addpayable = () => {
  const [yearLevels, setYearLevels] = useState([]);
  const [selectedYearLevel, setSelectedYearLevel] = useState('');
  const [payables, setPayables] = useState([]);
  const [newPayable, setNewPayable] = useState({ name: '', amount: '' });
  const [selectAll, setSelectAll] = useState(false);

  const handleYearLevelChange = (event) => {
    setSelectedYearLevel(event.target.value);
  };

  const handleSelectAll = (event) => {
    setSelectAll(event.target.checked);
    setSelectedYearLevel(event.target.checked ? 'all' : '');
  };

  const handlePayableChange = (event) => {
    const { name, value } = event.target;
    setNewPayable((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddPayable = () => {
    if (!newPayable.name || !newPayable.amount) {
      alert('Please enter a name and amount for the payable.');
      return;
    }

    const newPayableWithYearLevel = {
      ...newPayable,
      yearLevel: selectedYearLevel === 'all' ? ['1st', '2nd', '3rd', '4th'] : [selectedYearLevel],
    };

    setPayables([...payables, newPayableWithYearLevel]);
    setNewPayable({ name: '', amount: '' });
  };

  const handleEditPayable = (index) => {
    const editablePayable = payables[index];
    setSelectedYearLevel(editablePayable.yearLevel[0]); // Set year level to first selected
    setNewPayable({
      name: editablePayable.name,
      amount: editablePayable.amount,
    });
    // Remove the payable from the list when editing
    const updatedPayables = [...payables];
    updatedPayables.splice(index, 1);
    setPayables(updatedPayables);
  };

  const handleSavePayables = () => {
    // Here you can implement logic to save payables to your backend or perform other actions
    console.log('Payables to save:', payables);
    alert('Payables saved successfully!'); // Example: show success message
    setPayables([]); // Clear payables after saving
  };

  return (
    <div>
    <div> <Header />
    
    
    <h1 className="mt-8 px-10 text-3xl font-semibold mb-4">Add Payable</h1>
     


    <div className="  border-4 rounded-md border-zinc-800 w bg-white p-24 container mx-auto px-10 mt-20">
       
       
      <div className="flex mb-4 items-center font-bold">
        <label htmlFor="yearLevel" className="mr-2 text-sm">
          Year Level:
        </label>
        <select
          id="yearLevel"
          className="border border-zinc-900 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-green-700"
          value={selectedYearLevel}
          onChange={handleYearLevelChange}
        >
          <option value="">Select Year Level</option>
          <option value="1st">1st Year</option>
          <option value="2nd">2nd Year</option>
          <option value="3rd">3rd Year</option>
          <option value="4th">4th Year</option>
        </select>
        <div className="ml-4">
          <input
            type="checkbox"
            id="selectAll"
            className="mr-2 focus:ring-1 focus:ring-green-700"
            checked={selectAll}
            onChange={handleSelectAll}
          />
          <label htmlFor="selectAll" className="text-sm">
            Select All
          </label>
        </div>
      </div>
    <div className='grid grid-cols-2 gap-10'>
      <div className="mb-4 ">
        <label htmlFor="payableName" className="block text-sm font-bold mb-1">
          Payable Name:
        </label>
        <input
          type="text"
          id="payableName"
          name="name"
          className="border border-zinc-900 rounded px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-green-700"
          value={newPayable.name}
          onChange={handlePayableChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="payableAmount" className="block text- font-bold mb-1">
          Payable Amount:
        </label>
        <input
          type="number"
          id="payableAmount"
          name="amount"
          className="border border-zinc-900 rounded px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-green-700"
          value={newPayable.amount}
          onChange={handlePayableChange}
        />
      </div></div>
    
      <button
       className="justify justify-left px-20 py-4 bg-zinc-800  font-bold text-white rounded-md hover:bg-green-700"
        onClick={handleAddPayable}
      >
        Add Payable
      </button>

      {payables.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg mb-2 font-bold bonr-bak
          ">Current Payables:</h3>
          <ul>
            {payables.map((payable, index) => (
              <li key={index}>
                {payable.name} - {payable.amount} ({payable.yearLevel.join(', ')})
                <button
                  className="ml-2 text-sm text-blue-600"
                  onClick={() => handleEditPayable(index)}
                >
                  Edit
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        className={`justify justify-left px-20 py-4 bg-zinc-800  font-bold text-white rounded-md hover:bg-green-700" ${
          payables.length === 0 ? 'hidden' : ''
        }`}
        onClick={handleSavePayables}
      >
        Save Payables
      </button>
    </div></div></div>

  );
};

export default Addpayable;
