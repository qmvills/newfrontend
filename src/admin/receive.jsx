import React from "react";
import Header from "../components/header";
import { useState } from "react";
import DataTable from "react-data-table-component";

const Receive= () => {

    const columns = [
        {
            name: 'ID Number',
            selector: row => row.id,
            sortable: true
        },
        {
            name: 'Last Name',
            selector: row => row.lname,
            sortable: true
        },
        {
            name: 'First Name',
            selector: row => row.fname,
            sortable: true
        },
        {
            name: 'Gender',
            selector: row => row.gender,
            sortable: true
        },
        {
            name: 'Year Level',
            selector: row => row.year,
            sortable: true
        },
        {
            name: 'User Type',
            selector: row => row.type,
            sortable: true
        },
        {
            name: 'Payable',
            selector: row => row.payable,
            sortable: true
        }
    
    ];
    const data = [
        {
            id: 1,
            id: '2110210',
           lname:'MONTEFALCON',
           fname: 'JASPER',
           gender: 'Male',
           year: 'Second Year',
           type:'Regular Student',
           payable: 250.00

        },
        {
            id: 2,
            id: '2110211',
           lname:'DAYTIC',
           fname: 'LIZA MAE',
           gender: 'Female',
           year: 'Second Year',
           type:'Regular Student',
           payable: 250.00
        },
        {
            id: 1,
            id: '2110212',
           lname:'VILLAREAL',
           fname: 'QUEEN MARY',
           gender: 'Female',
           year: 'Second Year',
           type:'Officer',
           payable: 0.00
        },
        {
            id: 4,
            id: '2110213',
           lname:'GALLEGOS',
           fname: 'jAIRAH JAVE',
           gender: 'Female',
           year: 'Second Year',
           type:'Treasurer',
           payable: 0.00
        },
    
    ]
 

    return (
        <div>
        <div>
            <Header/>
            </div>
            <h1 className="mt-8 px-10 text-3xl font-semibold mb-4">Receive</h1>

            <div  className="flex justify-center mt-10  h-screen">
               
            <DataTable
                columns={columns}
                data={data}
                selectableRows
                fixedHeader
                className=""
              
           />
            </div>

        </div>
        
    )
}

export default Receive;