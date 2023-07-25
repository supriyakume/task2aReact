import React, { useState } from 'react'
import './App.css'

const Form =()=>{
    const [showEmail, setShowEmail]=useState(false)
    const [showPhoneNumber, setShowPhoneNumber]=useState(false)

    const handleContact=(e)=>{
        const dropDown=e.target.value

        if(dropDown==='email'){
            setShowEmail(true)
            setShowPhoneNumber(false)
        }
        if(dropDown==='phoneNumber'){
            setShowPhoneNumber(true)
            setShowEmail(false)
        }
    }
    return (
        <div className='container'>
            <div  className='wrapper'>
                <h5>First Name</h5>
                <input  type='text' name='firstName' placeholder='Enter your first name' />
                

            </div>
            <div className='wrapper'>
            <h5>Last Name</h5>
            <input  type='text'  name='lastName' placeholder='Enter your last name' />
            </div>
            
            <div className='bottomside'>
                <h5 >How should we contact you ?</h5>
                <select name='contact' id='contact' onChange={handleContact}>
                    <option >Choose Option</option>
                    <option value='email' name='emailId' >Email ID</option>
                    <option value='phoneNumber' name='phoneNumber' >Phone Number</option>
                    
                </select>
                

            </div>
            <div className='wrapper'>
            
                {showEmail ? <> <h5>Email ID</h5> <input type='text' name='emailId' placeholder='Enter your email ID' /></>:null }
                {showPhoneNumber ?<> <h5>Phone Number</h5> <input type='text' name='phoneNumber' placeholder='Enter your phone number' /></>:null}
            </div>
        </div>

    )
}
export default Form;