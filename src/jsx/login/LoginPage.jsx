/* eslint-disable no-undef */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import img1 from '../../assets/images/carpet.jpg';
import '../../assets/css/login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// import { TextField } from '@mui/material';
// import { withRouter } from 'react-router-dom';


const url = 'https://api.diwamjewels.com/DMJ/'
const verifyEndPoint = 'verify/otp';
const endPoint = 'send/otp/login';
const signIn = 'signin/withEmailOrPhoneNumber';


export default class LoginPage extends React.Component {

    render() {
        return (
            <>
                <LoginWithMobileNo />
            </>
        )
    }
}

const LoginWithMobileNo = () => {

    const [mobileNo, setMobileNo] = useState('')
    const [password, setPassword] = useState('')
    const [isPhone, setIsPhone] = useState('')

    const [isOtp, setOtp] = useState(false);
    const [otp, setOtpValue] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {

        e.preventDefault();
        await localStorage.setItem('mobileNo', mobileNo);
        setOtp(true)
    }

    async function verifyOtp(e) {
        e.preventDefault()
        const otpValue = {
            "userName": mobileNo,
            "otp": otp
        }

        try {
            const otpRes = await axios.post(url + verifyEndPoint, otpValue)

            if(otpRes.data.message==='OTP verified'){

                // console.log('fired')
                let formdata = new FormData()

                formdata.append('userName',mobileNo)
                formdata.append('password',password)
                
                try{
                    const loginRes = await axios.post(url+signIn,formdata)
                    console.log(loginRes.data.data)
                    localStorage.setItem('userId',loginRes.data.data.id)
                    if(loginRes.data.data.id){
                        navigate('/')
                        window.location.reload()
                    }
                }
                catch(err){
                    console.log(err)
                }
            }
            else{
                console.log('expired')
            }
        }
        catch (err) {
            console.log(err)
        }
    }


    async function sentOtp(e) {
        e.preventDefault()

        const formdata = new FormData()

        formdata.append("mailOrPhone", mobileNo)
        formdata.append('password', password)

        try {
            const otpRes = await axios.post(url + endPoint, formdata)

            if(otpRes.data.message==='OTP send successfully'){
                setOtp(true)
            }
            console.log(otpRes)
        }
        catch (err) {
            console.log(err)
        }

    }



    return (
        <>

            <div className="fullpage-bg">
                <div className="container">
                    <div className="login-bg shadow-sm">
                        <div className="row">
                            <div className="col-md-12">
                                <img src={img1} className="coupon-img" alt="Coupon" />
                                <div className="user-login">
                                    <h6><b>Login</b></h6>
                                    <form onSubmit={(e) => { e.preventDefault() }}>

                                        <input type="text" className="login-input" id="login-number" placeholder="Mobile Number / Email-id *" value={mobileNo} onChange={(e) => {
                                            setMobileNo(e.target.value)
                                        }} required />

                                        <input type="password" className="login-input" id="login-number1" placeholder="Enter the Password*" value={password} onChange={(e) => {
                                            setPassword(e.target.value)
                                        }} required />

                                        {
                                            isOtp &&
                                            <>
                                                <b style={{ color: 'green', letterSpacing: '0.3px', padding: '4px' }}>Otp Sent Successfully</b>


                                                <input type="number" className="login-input" placeholder="Enter the Otp*" value={otp} onChange={(e) => {
                                                    setOtpValue(e.target.value)
                                                }} required />
                                            </>
                                        }
                                        {/* <label className="error" style={{ display: showError }}>Enter a Correct Email-Id / Phone No.</label> */}
                                        <br />
                                        <p className="tp-text">By Continuing, I agree to the <span className="tp-color"><b>Terms of Use & Privacy Policy</b></span></p>
                                        {isOtp ? <button type="button" className="continue-btn" onClick={(e) => {
                                            verifyOtp(e)

                                        }}>Verify and Login</button>
                                            : <button type="button" className="continue-btn" onClick={(e) => {
                                                sentOtp(e)
                                            }}>SIGN IN</button>
                                        }
                                        <p className="tp-text">New to DMJ ? <NavLink to="/login" className="tp-color"><span className="text-danger"><b>Sign Up</b></span></NavLink></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}