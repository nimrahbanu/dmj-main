import React from 'react';
import HeaderCon from '../header/HeaderCon';
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';

export default class TrackOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderId: '',
            trakEmail: ''
        }
        this.trackOrder = this.trackOrder.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    trackOrder(e) {
        e.preventDefault();
        console.log('fired');
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }


    render() {
        const { orderId, trakEmail } = this.state;
        return (
            <>
                <HeaderCon />
                <Navbar />

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h5 className="mt-5 text-center"><b>Track Your Order</b></h5>

                            <div className="display-track">
                                <form onSubmit={this.trackOrder}>
                                    <h6 className="mt-4"><b>Enter Details :</b></h6>

                                    <label htmlFor="track_order" className="mt-3 label-font">Order ID</label><br />

                                    <input type="text" className="box-style w-100" id="track_order" placeholder="Order ID"
                                        value={orderId}
                                        onChange={e => this.setState({ orderId: e.target.value, })}
                                    />

                                    <label htmlFor="track_id" className="mt-3 label-font">Phone Number / Email ID</label><br />

                                    <input type="email" className="box-style w-100" id="track_id" placeholder="Phone Number / Email ID"
                                        value={trakEmail}
                                        onChange={(e => this.setState({ trakEmail: e.target.value, }))}
                                    />

                                    <button className="px-5 py-2 view-btn mt-4 w-100" type='submit'>Track Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        )
    }
}