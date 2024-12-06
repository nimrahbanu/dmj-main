import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import HeaderCon from '../header/HeaderCon';
import Navbar from '../header/Navbar';
import Banner from '../Banner/Banner';
import Footer from '../footer/Footer';

export default class Faq extends React.Component {
    constructor(props) {
        super(props)
        // this.state={}

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
                <Banner
                    title="FAQ's"
                    fullTitle="Home / FAQ's"
                />
                <div className="container">
                    <div class="row mt-5">
                        <div class="col-md-12">
                            <Item
                                dKey="0"
                                Question='Accordion Item #1'
                                Answer=' India: Free Shipping Other Countries: Shipping charges vary according to
                                weight/volumetric weight of product. From our end, we try to ship to most of the
                                countries with the help of our courier partners.
                                Do reach us at our contact page or send us a message on our facebook page with your
                                query. In such cases, we take an estimate of shipping from our courier partners and pass
                                the same information to you.'
                            />
                            <Item
                                dKey="1"
                                Question='Accordion Item #1'
                                Answer=' India: Free Shipping Other Countries: Shipping charges vary according to
                                weight/volumetric weight of product. From our end, we try to ship to most of the
                                countries with the help of our courier partners.
                                Do reach us at our contact page or send us a message on our facebook page with your
                                query. In such cases, we take an estimate of shipping from our courier partners and pass
                                the same information to you.'
                            />
                            <Item
                                dKey="1"
                                Question='Accordion Item #1'
                                Answer=' India: Free Shipping Other Countries: Shipping charges vary according to
                                weight/volumetric weight of product. From our end, we try to ship to most of the
                                countries with the help of our courier partners.
                                Do reach us at our contact page or send us a message on our facebook page with your
                                query. In such cases, we take an estimate of shipping from our courier partners and pass
                                the same information to you.'
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-5"></div>
                <Footer />
            </>
        );
    }
}


class Item extends React.Component {
    render() {
        const { Question, Answer, dKey } = this.props;
        return (
            <>
                <Accordion defaultActiveKey={dKey}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='faq-font'>{Question}</Accordion.Header>
                        <Accordion.Body className='ans-font'>
                            {Answer}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </>
        )
    }
}

export { Item };