import React from "react";
import Header from "../components/header";
import { useState } from "react";
import Login from "../components/LoginForm/login";

function Register() 
{


const[formValue, setFormValue] = useState ({id:'', lname:'',fname:'',age:'',yearlevel:'',gender:'',});
const[disable, setDisable]=useState('Typing');


const handleInput=(e)=>{
    const { id, value} = e.target;
    setFormValue({...formValue, [id]:value});
}

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formValue);
    setDisable('submitted');
}
    return (
        <div>
        <div>
        <Header/>
        </div>
        <div className="w-full h-screen flex items-start ">
    <div className="w-full md:w-full h-full flex flex-col ">
        <div className="col-md-12">
            <h1 className="mt-8 px-10 text-3xl font-semibold mb-4">Register</h1>
            


            <form onSubmit={handleSubmit} className="flex flex-col gap-5  border-4 rounded-md border-zinc-800 w bg-white p-24 container mx-auto px-10 mt-20">
          
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    <div>
                        <label className="form-lable text-xl font-bold">First Name:</label>
                        <input type="text" name="fname" className="border  border-zinc-800 rounded px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-green-700" onChange={handleInput}/>
                    </div>

                    <div>
                        <label className="form-lable text-xl  font-bold">Last Name:</label>
                        <input type="text" name="lname" className="border  border-zinc-800 rounded px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-green-700" onChange={handleInput}/>
                    </div>

                    <div>
                        <label className="form-lable text-xl  font-bold">ID Number:</label>
                        <input type="id" name="username" className="border  border-zinc-800 rounded px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-green-700" onChange={handleInput}/>
                    </div>

                    
                    <div >
                        <label className="form-lable text-xl  font-bold">Gender:</label>
                        <div className="flex items-center gap-2">
                            <input id="male-radio" type="radio" value="male" name="gender" className="w-4 h-4"/>
                            <label htmlFor="male-radio" className="ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                        
                            <input id="female-radio" type="radio" value="female" name="gender" className="w-4 h-4"/>
                            <label htmlFor="female-radio" className="ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="form-lable text-xl  font-bold ">Year Level:</label>
                        <select  className="border border-zinc-800 rounded px-2 w-full py-1 focus:outline-none focus:ring-1 focus:ring-green-700" name="yearLevel">
                            <option value="0">--Select Year Level--</option>
                            <option value="1">First Year</option>
                            <option value="2">Second Year</option>
                            <option value="3">Third Year</option>
                            <option value="4">Fourth Year</option>
                            <option value="5">Irregular</option>
                        </select>
                    </div>
                    <div>
                        <label className="form-lable text-xl  font-bold">User Type:</label>
                        <select  className="border  border-zinc-800 rounded px-2 w-full py-1 focus:outline-none focus:ring-1 focus:ring-green-700" name="userType">
                            <option value="0">--Select User Type--</option>
                            <option value="officer">Officer</option>
                            <option value="treasurer">Treasurer</option>
                            <option value="regular">Regular Student</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="form-lable text-xl  font-bold">Monthly Dues Payable:</label>
                        <input type="text" value={250} name="payable" className="border  border-zinc-800 rounded px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-green-700" onChange={handleInput}/>
                    </div>

                </div>

                <div className="flex justify-end">
                    <button type="submit" className="justify justify-left px-20 py-4 bg-zinc-800  font-bold text-white rounded-md hover:bg-green-700">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>

    </div>

)};
export default Register;


