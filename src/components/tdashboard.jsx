import React, { useState, useEffect } from 'react';

function Tdashboard({ data }) {
    const [availableFunds, setAvailableFunds] = useState(0);
    const [expenses, setExpenses] = useState(0);
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/financial-data');
            const json = await response.json();
            setAvailableFunds(json.availableFunds);
            setExpenses(json.expenses);
            setBalance(json.balance);
        };
        fetchData();
    }, []);

    return (
        <div className=' border border-white bg-zinc-200 p-24 container mx-auto px-10 mt-20'>
            
            <div className=' grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='bg-green-600 text-center text-white p-6 md:p-12 rounded-md'>
                    <p className="font-bold text-lg">Available Funds</p>
                    <p className="text-4xl md:text-6xl">{availableFunds}</p>
                </div>
                <div className='bg-black text-center text-white p-6 md:p-12 rounded-md'>
                    <p className='font-bold text-lg'>Expenses</p>
                    <p className='text-4xl md:text-6xl'>{expenses}</p>
                </div>
                <div className='bg-white text-center text-black p-6 md:p-12 rounded-md'>
                    <p className='font-bold text-lg'>Receivable</p>
                    <p className='text-4xl md:text-6xl'>{balance}</p>
                </div>
            </div>
        </div>
    );
}

export default Tdashboard;
