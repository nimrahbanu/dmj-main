import React from 'react';
import HeaderCon from '../header/HeaderCon';
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';
import visionImg1 from '../../assets/images/icons8-ophthalmology-64.png';
import visionImg2 from '../../assets/images/icons8-rocket-50.png';
import SubscribenMail from '../subscribe/SubscribenMail';
import managerImg from '../../assets/images/Rectangle 119.png';
import Banner from '../Banner/Banner';

export default class About extends React.Component {

    constructor(props){
        super(props)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        return (
            <>
                <HeaderCon />
                <Navbar />

                {/* //first banner starts here */}

                <Banner
                    title='About Us'
                    fullTitle='Home / about us'
                />
                <div className="container">
                    <h3 className="mt-5 text-center about-heading"><b>About Us</b></h3>
                    <div className="row">
                        <div className="col-md-6 mt-3">
                            <p className="para-text mt-3">
                                Established in 2011, BlueStone is India's leading destination for high quality fine jewellery with strikingly exquisite designs. We aim at revolutionizing the fine jewellery and lifestyle segment in India with a firm focus on
                                craftsmanship, quality and customer experience. In a short span of time, BlueStone has built a large family of loyal consumers in India and abroad.
                            </p>

                            <p className="para-text">Established in 2011, BlueStone is India's leading destination for high quality fine jewellery with strikingly exquisite designs.</p>
                        </div>

                        <div className="col-md-6 mt-3">
                            <p className="para-text mt-3">
                                Established in 2011, BlueStone is India's leading destination for high quality fine jewellery with strikingly exquisite designs. We aim at revolutionizing the fine jewellery and lifestyle segment in India with a firm focus on
                                craftsmanship, quality and customer experience. In a short span of time, BlueStone has built a large family of loyal consumers in India and abroad.
                            </p>

                            <p className="para-text">Established in 2011, BlueStone is India's leading destination for high quality fine jewellery with strikingly exquisite designs.</p>
                        </div>
                    </div>

                </div>

                <div className="container">
                    <VisionRow
                        imgVision={visionImg1}
                    />
                    <VisionRow
                        imgVision={visionImg2}
                    />
                </div>
                <div className="container">
                    <h3 className="mt-5 text-center about-heading"><b>Our Management</b></h3>

                    <div className="row">
                        <ManagementCard
                            name='ANITA THAPAR KATHPALIA'
                            img={managerImg}
                            position='Advisor'
                            about=' A successful senior corporate executive, MBA from IIM Ahmedabad, with over 35 years of experience and expertise in Marketing, Operations and Strategy. She has worked with some of the best brands like GSK, Lakme, India Today,
                                Fabindia and many more and continues to work in areas relating to craft, livelihoods and heritage & culture.'
                        />
                        <ManagementCard
                            name='ANITA THAPAR KATHPALIA'
                            img={managerImg}
                            position='Advisor'
                            about=' A successful senior corporate executive, MBA from IIM Ahmedabad, with over 35 years of experience and expertise in Marketing, Operations and Strategy. She has worked with some of the best brands like GSK, Lakme, India Today,
                                Fabindia and many more and continues to work in areas relating to craft, livelihoods and heritage & culture.'
                        />
                        <ManagementCard
                            name='ANITA THAPAR KATHPALIA'
                            img={managerImg}
                            position='Advisor'
                            about=' A successful senior corporate executive, MBA from IIM Ahmedabad, with over 35 years of experience and expertise in Marketing, Operations and Strategy. She has worked with some of the best brands like GSK, Lakme, India Today,
                                Fabindia and many more and continues to work in areas relating to craft, livelihoods and heritage & culture.'
                        />
                    </div>
                </div>
                <SubscribenMail />
                <Footer />
            </>
        )
    }
}


class VisionRow extends React.Component {
    render() {
        const { imgVision } = this.props;
        return (
            <>
                <div className="row">
                    <div className="col-md-12 mt-4">
                        <div className="d-flex">
                            <img src={imgVision} className="img-fluid vision-img" alt="Vision" />

                            <div className="ms-4 mt-2">
                                <h4 className="about-heading"><b>Our Vision</b></h4>

                                <p className="para-text">Our vision is to create a global brand from India which is synonymous with craft.</p>
                            </div>
                        </div>

                        <p className="para-text">
                            Our each product is uniquely designed to present artistic value, style and culture along with the required strength. Our mission is very clear to serve worldwide customers by providing real essence of traditional and innovative
                            dynamics coupled with superb handcraft and quality with the advanced technology. We are continuously on the growth path to evaluate our upscale jewelry and handicrafts with the finest quality.
                        </p>
                    </div>
                </div>
            </>
        )
    }
}


class ManagementCard extends React.Component {
    render() {
        const { name, img, position, about } = this.props;
        return (
            <>
                <div className="col-md-4 mt-4">
                    <div className="card border-0">
                        <div className="text-center"><img src={img} className="card-img-top img-fluid about-card-img" alt="Person" /></div>

                        <div className="card-body">
                            <h6 className="text-center"><b>{name} </b></h6>

                            <p className="text-center">
                                <b>{position}</b>
                            </p>

                            <p className="card-text para-text">
                                {about}
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}