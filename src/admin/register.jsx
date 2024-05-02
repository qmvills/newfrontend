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
        <div className="w-full h-screen flex items-start overflow-y-hidden">
    <div className="w-full md:w-full h-full flex flex-col">
        <div className="col-md-12">
            <h1 className="mt-8 px-10 text-3xl font-semibold mb-4">Register</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="form-lable text-xl">Id Number:</label>
                        <input type="id" name="username" className="p-5 w-full text-black py-2 bg-trans border-b border-black outline-none focus:outline-none" onChange={handleInput}/>
                    </div>
                    <div>
                        <label className="form-lable text-xl">Last Name:</label>
                        <input type="text" name="lname" className="p-5 w-full text-black py-2 bg-trans border-b border-black outline-none focus:outline-none" onChange={handleInput}/>
                    </div>
                    <div>
                        <label className="form-lable text-xl">First Name:</label>
                        <input type="text" name="fname" className="p-5 w-full text-black py-2 bg-trans border-b border-black outline-none focus:outline-none" onChange={handleInput}/>
                    </div>
                    
                    <div >
                        <label className="form-lable text-xl">Gender:</label>
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
                        <label className="form-lable text-xl">Year Level:</label>
                        <select className="p-5 w-full text-black py-2 bg-trans border-b border-black outline-none focus:outline-none" name="yearLevel">
                            <option value="1">First Year</option>
                            <option value="2">Second Year</option>
                            <option value="3">Third Year</option>
                            <option value="4">Fourth Year</option>
                            <option value="5">Irregular</option>
                        </select>
                    </div>
                    <div>
                        <label className="form-lable text-xl">User Type:</label>
                        <select className="p-5 w-full text-black py-2 bg-trans border-b border-black outline-none focus:outline-none" name="userType">
                            <option value="officer">Officer</option>
                            <option value="treasurer">Treasurer</option>
                            <option value="regular">Regular Student</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="form-lable text-xl">Payable:</label>
                        <input type="text" value={250} name="payable" className="p-5 w-full text-black py-2 bg-trans border-b border-black outline-none focus:outline-none" onChange={handleInput}/>
                    </div>
                    <div>
                        <label className="form-lable text-xl">Password:</label>
                        <input type="password" name="password" className="p-5 w-full text-black py-2 bg-trans border-b border-black outline-none focus:outline-none" onChange={handleInput}/>
                    </div>
                </div>

                <div>
                    <button type="submit" className="p-4 bg-green-500 text-white rounded-md hover:bg-green-600">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>

    </div>

)};
export default Register;


