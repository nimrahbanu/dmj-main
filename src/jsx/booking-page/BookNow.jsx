import React from 'react';
import HeaderCon from '../header/HeaderCon';
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';
import img1 from '../../assets/images/brace.jpg';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default class BookNow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: '',
            isLoading: false,

            email: '',
            getCountry: '',
            fName: '',
            lName: '',
            address: '',
            appartment: '',
            city: '',
            state: '',
            pincode: '',
            phone: '',
            saveValue: ''
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {

        axios.get('http://restcountries.com/v2/all')
            .then((res) => {
                this.setState({ countries: res.data, isLoading: true })
            })
            .catch((err) => {
                console.log(err);
                this.setState({ isLoading: false })
            });

    }
    // https://restcountries.com/v2/all

    render() {
        const { countries, isLoading } = this.state;
        return (
            <>
                <HeaderCon />
                <Navbar />


                <div className="container">
                    <p className="pay-text pt-3">Cart / Information / Payment</p>

                    <div className="row">
                        <div className="col-md-6">
                            <form>
                                <div className="d-flex justify-content-between mt-5">
                                    <h6>Contact Information</h6>

                                    <p className="acc-text">
                                        Already have an account? <span className="text-primary"><b><NavLink to="/loginPage">Login</NavLink></b></span>
                                    </p>
                                </div>

                                <input type="email" className="w-100 box-style" id="pay_email" placeholder="Enter your email" />

                                <h6 className="mt-5">Shipping Address</h6>

                                <select name="book_country" id="book_country" className="w-100 box-style" onChange={(e) => { this.setState({ getCountry: e.target.value }) }}>
                                    <option value="">Country</option>

                                    <option value="1">India</option>
                                    {isLoading && countries.map((data, index) => {
                                        return (
                                            <option value={data.name} key={index + 1}>{data.name}</option>
                                        )
                                    })}

                                </select>

                                <div className="row">
                                    <div className="col-md-6 mt-3">
                                        <input type="text" className="w-100 box-style" id="pay_fname" placeholder="First Name" onClick={(e) => this.setState({ fName: e.target.value })} />
                                    </div>

                                    <div className="col-md-6 mt-3">
                                        <input type="text" className="w-100 box-style" id="pay_lname" placeholder="Last Name" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 mt-3">
                                        <input type="text" className="w-100 box-style" id="pay_address" placeholder="Address" />
                                    </div>

                                    <div className="col-md-12 mt-3">
                                        <input type="text" className="w-100 box-style" id="pay_appart" placeholder="Appartment,Suite,etc." />
                                    </div>

                                    <div className="col-md-4 mt-3">
                                        <input type="text" className="w-100 box-style" id="pay_city" placeholder="City" />
                                    </div>

                                    <div className="col-md-4 mt-3">
                                        <select name="book_state" id="book_state" className="w-100 box-style">
                                            <option value="">State</option>

                                            <option value="1">Rajasthan</option>

                                            <option value="2">Haryana</option>

                                            <option value="3">Delhi</option>

                                            <option value="4">Gujrat</option>

                                            <option value="5">Goa</option>
                                        </select>
                                    </div>

                                    <div className="col-md-4 mt-3">
                                        <input type="number" className="w-100 box-style" id="pay_code" placeholder="Pincode" />
                                    </div>

                                    <div className="col-md-12 mt-3">
                                        <input type="tel" className="w-100 box-style" id="pay_phone" placeholder="Phone" />
                                    </div>

                                    <div className="col-md-12">
                                        <div className="mb-3 form-check mt-3">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />

                                            <label className="form-check-label" htmlFor="exampleCheck1">save this information</label>
                                        </div>
                                    </div>

                                    <div className="col-md-12 mt-4">
                                        <div className="d-flex justify-content-between">
                                            <NavLink to="/addToCart" className="acc-text mt-2"><i className="bi bi-chevron-left"></i> Return to cart</NavLink>

                                            <NavLink to="/checkout"><button className="view-btn px-3 py-2 pay-btn">Continue to Payment</button></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div>
                                <h6 className="mt-4"><b>Any Questions?</b></h6>

                                <p>Please <NavLink to="/contactUs" className="text-decoration-none text-primary">contact us </NavLink>or chat with us.</p>
                            </div>
                        </div>

                        <div className="col-md-6 mt-5">
                            <div className="pay-bg display-form">
                                <div className="d-flex">
                                    <img src={img1} alt="Cart" className="img-fluid cart-img" />

                                    <p className="ms-3 mt-3 cart-text">Rose Gold Clover Bracelate</p>
                                </div>

                                <p className="mt-4 cart-text"><i className="bi bi-currency-rupee"></i> 1,000.00</p>
                            </div>

                            <div className="pay-bg mt-4">
                                <form className="">
                                    <label htmlFor="form-label"><b>Enter Coupon Code</b></label><br />

                                    <div className="d-flex mt-3">
                                        <input className="box-style me-2 w-100" type="text" placeholder="Enter coupon code" />

                                        <button className="btn btn-outline-dark" type="submit">Apply</button>
                                    </div>
                                </form>


                                <div className="accordion accordion-flush mt-4" id="accordionFlushExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingOne">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                <b>Coupons</b>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                <div className="row">

                                                    <GiftCard
                                                        giftTitle='Free Gift'
                                                        giftDes='Free jewellery worth Rs 1499 on order above Rs 2199'
                                                    />

                                                    <GiftCard
                                                        giftTitle='Free Gift'
                                                        giftDes='Free jewellery worth Rs 1499 on order above Rs 2199'
                                                    />

                                                    <GiftCard
                                                        giftTitle='Free Gift'
                                                        giftDes='Free jewellery worth Rs 1499 on order above Rs 2199'
                                                    />

                                                    <GiftCard
                                                        giftTitle='Free Gift'
                                                        giftDes='Free jewellery worth Rs 1499 on order above Rs 2199'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h6 className="mt-4"><b>Order Details</b></h6>

                                <div className="d-flex justify-content-between">
                                    <p className="cart-text">Sub Total</p>

                                    <p className="cart-text"><i className="bi bi-currency-rupee"></i> 1,000.00</p>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <p className="cart-text">Coupon Discount</p>

                                    <p className="cart-text"><i className="bi bi-currency-rupee"></i> 0</p>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <p className="cart-text">Delivery Charge</p>

                                    <p className="cart-text"><i className="bi bi-currency-rupee"></i> 0</p>
                                </div>

                                <hr />

                                <div className="d-flex justify-content-between">
                                    <p className="cart-text">TOTAL <span className="incl-text">(Incl of all taxes.)</span></p>

                                    <p className="cart-text"><i className="bi bi-currency-rupee"></i> 1,000.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <Footer />
            </>
        )
    }
}


class GiftCard extends React.Component {
    render() {
        const { giftTitle, giftDes } = this.props;
        return (
            <>
                <div className="col-md-6 mt-2">
                    <div className="coupon-card">
                        <h6>{giftTitle}</h6>

                        <p className="coupon-text">{giftDes}</p>
                    </div>
                </div>
            </>
        )
    }
}