import React, { Component } from 'react';
import otpIcon from '../../assets/images/handWithPhone.png';
import { NavLink } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from '@mui/material';

export default class Otp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue1: '',
            inputValue2: '',
            inputValue3: '',
            inputValue4: '',
            inputValue5: '',
            inputValue6: '',
            timer: 1,
            mobileNo: ''
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.inputRefs = [
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef(),
        ];
    }


    componentDidMount() {
        const mobileNo = localStorage.getItem('mobileNo');
        this.setState({ mobileNo: mobileNo })
    }

    handleOnChange = (e, index) => {
        const { value } = e.target;
        const re = /^[0-9\b]+$/;

        if (value.length === 1 && re.test(value)) {
            const nextIndex = index + 1;
            if (nextIndex < this.inputRefs.length) {
                this.inputRefs[nextIndex].current.focus();
            }
            this.setState({
                [`inputValue${index + 1}`]: value
            });
        }
        else if (value.length === 0) {

            const prevIndex = index;
            console.log(prevIndex)
            if (prevIndex >= 0) {
                this.inputRefs[prevIndex].current.focus();
            }
            this.setState({
                [`inputValue${index + 1}`]: ''
            });
        }

    }


    render() {
        const { inputValue1, inputValue2, inputValue3, inputValue4, inputValue5, inputValue6, timer,mobileNo } = this.state;
        return (
            <>
                {(inputValue6.length + inputValue5.length + inputValue4.length + inputValue3.length + inputValue2.length + inputValue1.length > 5) && <Loading />}
                <div className="otpOuter">
                    <div className="otpInner">
                        <div className="inputBox m-auto">
                            <div className="otpIcon">
                                <img src={otpIcon} alt='otpIcon' />
                            </div>
                            <h2>Verify With OTP</h2>
                            <label>Sent to {mobileNo}</label>
                            <br />
                            <div className='otpInput'>
                                <input
                                    type='text'
                                    pattern='\d{1}'
                                    inputMode='numeric'
                                    value={inputValue1}
                                    onChange={(e) => this.handleOnChange(e, 0)}
                                    ref={this.inputRefs[0]}
                                />
                                <input
                                    type='text'
                                    pattern='\d{1}'
                                    inputMode='numeric'
                                    value={inputValue2}
                                    onChange={(e) => this.handleOnChange(e, 1)}
                                    ref={this.inputRefs[1]}
                                />
                                <input
                                    type='text'
                                    pattern='\d{1}'
                                    inputMode='numeric'
                                    value={inputValue3}
                                    onChange={(e) => this.handleOnChange(e, 2)}
                                    ref={this.inputRefs[2]}
                                />
                                <input
                                    type='text'
                                    pattern='\d{1}'
                                    inputMode='numeric'
                                    value={inputValue4}
                                    onChange={(e) => this.handleOnChange(e, 3)}
                                    ref={this.inputRefs[3]}
                                />
                                <input
                                    type='text'
                                    pattern='\d{1}'
                                    inputMode='numeric'
                                    value={inputValue5}
                                    onChange={(e) => this.handleOnChange(e, 4)}
                                    ref={this.inputRefs[4]}
                                />   <input
                                    type='text'
                                    pattern='\d{1}'
                                    inputMode='numeric'
                                    value={inputValue6}
                                    onChange={(e) => this.handleOnChange(e, 5)}
                                    ref={this.inputRefs[5]}
                                />
                            </div>
                            <br />

                            {<CountdownTimer
                                value={2 * timer}
                            />}

                            <br />
                            <p className='mt-2'>Log in using <NavLink>Password</NavLink></p>
                            <br />
                            <p>Having trouble logging in? <NavLink>Get Help</NavLink></p>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}


class Loading extends React.Component {
    render() {
        return (
            <div className='loadingOuter'>
                <CircularProgress />
            </div>
        )
    }
}



// for timer of resend otp

class CountdownTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeRemaining: this.props.value,
            showOtpBtn: false
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            if (this.state.timeRemaining > 0) {
                this.setState((prevState) => ({
                    timeRemaining: prevState.timeRemaining - 1,
                }));
            } else {
                clearInterval(this.intervalId);
                this.setState({ showOtpBtn: true });
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        const { timeRemaining, showOtpBtn } = this.state;
        return (
            <>
                {showOtpBtn ? (
                    <Button variant='outlined' onClick={() => console.log('fired')}>Send OTP</Button>
                ) : (
                    <>
                        Resend  in {timeRemaining} seconds
                    </>
                )}
            </>
        );
    }
}

