import React, { useState, useEffect } from 'react';
import { GiCash } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";

function Dashboard({ data }) {
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
        <div className=' border-4 rounded-md border-zinc-800 w bg-white p-24 container mx-auto px-10 mt-20'>
            
            <div className=' grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='bg-green-700 text-center text-white p-6 md:p-12 rounded-md'>
                    <p className="font-bold text-lg"><GiCash className='ml-36' size={80}/>Available Funds</p>
                    <p className="text-4xl md:text-6xl">{availableFunds}</p>
                </div>
                <div className='bg-red-700 text-center text-white p-6 md:p-12 rounded-md'>
                    <p className='font-bold text-lg'><GiPayMoney className= 'ml-36' size={80} />Expenses</p>
                    <p className='text-4xl md:text-6xl'>{expenses}</p>
                </div>
                <div className='bg-yellow-500 text-center text-black p-6 md:p-12 rounded-md'>
                    <p className='font-bold text-lg'><GiReceiveMoney className='ml-36' size={80} />Receivable</p>
                    <p className='text-4xl md:text-6xl'>{balance}</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
