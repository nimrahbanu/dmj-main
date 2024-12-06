/* eslint-disable no-undef */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import img1 from '../../assets/images/carpet.jpg';
import '../../assets/css/login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Otp from '../otp-page/Otp';
import Loader from '../loader/Loader';

// import { TextField } from '@mui/material';
// import { withRouter } from 'react-router-dom';


const url = 'http://137.184.3.191:8080/DMJ/';
const endPoint = 'api/v1/user/send/otp/signup';
const otpEndPoint = 'api/v1/user/verify/otp'

export default class Login2 extends React.Component {

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
    const [isPhone, setIsPhone] = useState('')

    const [otp, setOtpValue] = useState('')

    const [isLoading, setIsLoading] = useState(false)

    const [isOtp, setOtp] = useState(false)

    const navigate = useNavigate()

    async function authUser(txt) {
        const formdata = new FormData()
        formdata.append('mailOrPhone', txt)
        // formdata.append('type', false)
        try {
            const res = await axios.post(url + endPoint, formdata)
            console.log(res)
            if (res.data.message === 'OTP send successfully') {
                setIsLoading(false)
                setOtp(true)
                // localStorage.setItem('userAuth', mobileNo)
            }
            if (res.data.message === 'Email or Phone Number Already Exist') {
                // console.log('firedagain')
                setIsLoading(false)
                navigate('/login')
               
            }
            // else {
            //     alert(res.data.message)
            // }

        }
        catch (err) {
            setIsLoading(false)
            // console.log(err.response.data.message)
            alert(err.response.data.message)
            navigate('/login')
        }
    }

    async function validation(txt) {
        const mobilePattern = /^[789]\d{9}$/gm;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gm;

        if (mobilePattern.test(txt)) {
            // console.log('mobile number:', txt);
            localStorage.setItem('auth','mobile')
            return true
            // You can perform additional actions for a valid mobile number here.
        } else if (emailPattern.test(txt)) {
            // console.log('email address:', txt);
            localStorage.setItem('auth','email')
            return true
            // You can perform additional actions for a valid email address here.
        } else {

            alert("Please Enter a Correct Mobile Number / Email-Id")
            return false
            // You can handle the case of invalid input here.
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)

        const valid = await validation(mobileNo)
        // const valid = await validTxt;

        if (valid) {
            await authUser(mobileNo)
        }

        // await localStorage.setItem('dmjMobileNo', mobileNo);

        // navigate('/otp')
        setIsLoading(false)
    }


    async function handleVerfyOtp(e) {
        setIsLoading(true)
        e.preventDefault();
        const otpValue = {
            "userName": mobileNo,
            "otp": otp
        }
        try {
            const otpRes = await axios.post(url + otpEndPoint, otpValue)

            if (otpRes.data.message === 'OTP verified') {
                alert("Otp Verified")
                localStorage.setItem("mailOrNo", mobileNo)
                navigate('/signUp')
            }
            else{
                alert("Incorrect OTP")  
                setOtpValue('')
                setIsLoading(false)
            }
        }
        catch (err) {
            // console.log(err)
            setIsLoading(false)
        }
    }



    return (
        <>

{
    isLoading && <Loader/>
}

            <div className="fullpage-bg">

                <div className="login-bg">
                    <div className="">
                        <div className="">
                            <img src={img1} className="coupon-img" alt="Coupon" />
                            <div className="user-login">
                                <h6><b>Login or Signup</b></h6>
                                <form style={{ position: 'relative' }} onSubmit={(e) => { e.preventDefault() }} >
                                    {/* <p className='tele-code'>+91</p> */}

                                    {
                                        !isOtp ?
                                            <>
                                                <input type="tel" className="login-input" id="login-number" placeholder="Mobile Number / Email-id *" value={mobileNo} onChange={(e) => {
                                                    setMobileNo(e.target.value)
                                                }} required />
                                                {/* <label className="error" style={{ display: showError }}>Enter a Correct Email-Id / Phone No.</label> */}
                                                <br />
                                            </>

                                            :
                                            <div className="otp-container">
                                                <input type="tel" className="login-input" value={mobileNo} disabled />
                                                <b style={{ color: 'green', letterSpacing: '0.3px', padding: '4px' }}>Otp Sent Successfully</b>
                                                <input type="number" className="login-input" placeholder="Enter Otp" value={otp} onChange={(e) => {
                                                    setOtpValue(e.target.value)
                                                }} maxLength={6} required />
                                                {/* <label className="error" style={{ display: showError }}>Enter a Correct Email-Id / Phone No.</label> */}
                                                <br />
                                            </div>

                                    }

                                    <p className="tp-text">By Continuing, I agree to the <span className="tp-color"><b>Terms of Use & Privacy Policy</b></span></p>
                                    {!isOtp ?
                                        <button type="button" className="continue-btn" onClick={(e) => {
                                            handleSubmit(e)
                                        }}>CONTINUE</button>
                                        :
                                        <button type="button" className="continue-btn" onClick={(e) => {
                                            handleVerfyOtp(e)
                                        }}>Verify OTP</button>

                                    }
                                    <p className="tp-text">Already Have an account ? <NavLink to="/defaultLogin" className="tp-color"><span className="text-danger"><b>Login</b></span></NavLink></p>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}