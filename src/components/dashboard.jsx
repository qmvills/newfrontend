import React, { useState, useEffect } from 'react'

function Dashboard ({data}){
    const [availableFunds, setAvailableFunds] = useState (0)
    const [expenses, setExpenses] = useState (0)
    const [balance, setBalance] = useState (0)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch ('/api/financial-data')
            const json = await response.json()
            setAvailableFunds(json.availableFunds)
            setExpenses(json.expenses)
            setBalance(json.balance)
        }
        fetchData()
    }, [])

    return (
        <div className='container mx-auto p4'>
            <div className='grid grid-cols-3 gap-4'>
                <div className='bg-green-700 text-center p-4 rounded-md'>
                    <p className="font-bold text-lg">Availble Funds</p>
                    <p className ="text-xl">{availableFunds}</p>
                </div>
                <div className='bg-gray-200 text-center p-4 rounded-md'>
                    <p className='font-bold text-lg'>Expenses</p>
                    <p className='text-xl'>{expenses}</p>
                </div>
                <div className='bg-gray-200 text-center p-4 rounded-md'>
                    <p className='font-bold text-lg'>Balance</p>
                    <p className='text-xl'>{balance}</p>
                </div>
            </div>
        </div>
    )
}
export default Dashboard
   