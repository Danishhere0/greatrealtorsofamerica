import React, { useState } from 'react'
import BusinessInformation from './BusinessInformation'
import CreateAccount from './CreateAccount'
import ServiceArea from './ServiceArea'
import AddLicense from './AddLicense'
import { Link , Navigate, useNavigate } from 'react-router-dom'


import CreateAccountProgress from './CreateAccountProgress'
import Login from '../Login'

const SignUp = () => {
  const navigate = useNavigate();
  const [step,setStep] = useState(1)

    return (

    <div>
       <CreateAccountProgress/>
       {step==1 ?(<CreateAccount setStep={setStep} step={step}/>):(
        step==2 ?(<BusinessInformation setStep={setStep} step={step}/>):(
            step==3 ?(<ServiceArea setStep={setStep} step={step}/>):(
                step==4 ?(<AddLicense setStep={setStep} step={step}/>):(
                    // <Link to="login"></Link>
                    navigate("/login")
                     )
                 ) 
            )    
       )}
    </div>
  )
}

export default SignUp