import React, { useEffect, useState } from 'react';
import Footer from '../footer/Footer';
import HeaderCon from '../header/HeaderCon';
import Navbar from '../header/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import jDetails1 from '../../assets/images/jewel_img/bangel1.jpg';
import jDetails from '../../assets/images/jewel_img/bangels.jpg';
import { NavLink } from 'react-router-dom';
import CarouselBlog from '../carousel/CarouselBlog';



const JwelleryDetails = () => {

    const [ask, setAsk] = useState(false);
    const [wrt, setWrt] = useState(false)

    useEffect(() => {
        fetchDetails()
    }, [])


    return (
        <>
            <HeaderCon />
            <Navbar />

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p className="text-primary pt-4">Home / Jewellery / Jewellery Details</p>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-6 mt-4">
                        <Carousel fade={true} indicators={false} style={{ left: '0px ' }}>
                            <Carousel.Item>
                                <img src={jDetails} className="d-block w-100 img-fluid detail-slide" alt="jewellery" />
                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={jDetails1} className="d-block w-100 img-fluid detail-slide" alt="jewellery" />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={jDetails} className="d-block w-100 img-fluid detail-slide" alt="jewellery" />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={jDetails1} className="d-block w-100 img-fluid detail-slide" alt="jewellery" />

                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-5 mt-4">
                        <h5><b>Silver Coloured Bangels</b></h5>

                        <p className="line"></p>
                        <p className="pro-text"><span className="code-font">SKU:</span>UE00004-YG0000</p>
                        <div className="d-flex">
                            <h5><i className="bi bi-currency-rupee"></i> 5,500</h5>

                            <p className="text-primary ms-2">(30% Off)</p>
                        </div>

                        <p className="del-text text-muted">
                            MRP <del><i className="bi bi-currency-rupee"></i> 6,000</del> <span className="incl-text">Incl.all taxes</span>
                        </p>

                        <p className="review-top"><b>Availability:</b> In stock</p>

                        <div className="review-top">
                            <i className="bi bi-star-fill text-warning icon-text"></i>

                            <i className="bi bi-star-fill icon-text text-warning"></i>

                            <i className="bi bi-star-fill icon-text text-warning"></i>

                            <i className="bi bi-star-fill icon-text text-warning"></i>

                            <i className="bi bi-star-half icon-text text-warning"></i>
                            <span className="text-muted ms-2 text-size">50 Reviews</span>
                        </div>

                        <form className="mt-3">
                            <div className="display-del">
                                <h6 className="mt-2"><b>Quantity :</b></h6>

                                <div className="qty-container">
                                    <button className="qty-btn-minus btn-primary btn-rounded ms-3 rounded" type="button"><i className="bi bi-arrow-left"></i></button>

                                    <input type="text" name="qty" value="0" className="input-qty input-rounded m-1 input-content form-control" />

                                    <button className="qty-btn-plus btn-primary btn-rounded ml-1 rounded" type="button"><i className="bi bi-arrow-right"></i></button>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <label className="form-label mt-3"><b>Size</b></label>

                                    <select className="form-control w-100">
                                        <option>Select Size</option>

                                        <option value="1">4</option>

                                        <option value="2">5</option>

                                        <option value="3">6</option>

                                        <option value="4">7</option>
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label mt-3"><b>Color</b></label>

                                    <select className="form-control w-100">
                                        <option>Select color</option>

                                        <option value="1">Yellow</option>

                                        <option value="2">Silver</option>

                                        <option value="3">Blue</option>

                                        <option value="4">Pink</option>
                                    </select>
                                </div>
                            </div>
                        </form>

                        <div className="group-btn text-center mt-2">
                            <a href="wishlist.html">
                                <button className="py-2 px-2 wish-btn mt-3">Add to Wishlist <i className="bi bi-heart"></i></button>
                            </a>

                            <a href="add_cart.html">
                                <button className="py-2 px-2 cart-btn mt-3">Add to Cart <i className="bi bi-cart-check-fill"></i></button>
                            </a>

                            <a href="book_now.html">
                                <button className="py-2 px-2 view-btn mt-3">Buy Now <i className="bi bi-bag-fill"></i></button>
                            </a>
                        </div>

                        <div id="section" className="mt-5">
                            <div className="article">
                                <p className="para-text">These earrings are delicately etched in solid gold and feature the ammonite fossil, whose spiral shape symbolises continual change and evolution.</p>

                                <div className="moretext">
                                    <p className="para-text">The Ammonite Sleepers are designed for everyday staple wear with their minimal and classic form.</p>

                                    <p className="para-text">
                                        A contemporary reflection of the diverse forms taken by Australia’s ever-evolving land, Landscape references Australia’s natural architecture. Like the land itself, Landscape is simultaneously structured and fluid; bold and
                                        delicate. The gentle spiral line work has been etched into the front surface, the reverse, a softy polished beaten texture. The Ammonite evokes feelings of lost relics and jewellery unearthed.
                                    </p>
                                </div>
                            </div>

                            <NavLink className="moreless-button text-decoration-none" >Read more <i className="bi bi-arrow-right"></i></NavLink>
                        </div>
                    </div>
                </div>
                {/* End of Main Container  */}
            </div>
            <ProductDetails />
            <div className="container mt-5 jsdetails">
                <CarouselBlog
                    title='You may like this'

                />
            </div>

            <section>
                <div className="container mt-5">
                    <h5 className="text-center"><b>Customer Reviews</b></h5>
                    <div className="row">
                        <div className="col-md-12 mt-3">
                            <div className="text-center">
                                <i className="bi bi-star fs-4 text-warning"></i>
                                <i className="bi bi-star fs-4 text-warning"></i>
                                <i className="bi bi-star fs-4 text-warning"></i>
                                <i className="bi bi-star fs-4 text-warning"></i>
                                <i className="bi bi-star fs-4 text-warning"></i>
                                <p className="rv-text">Be the first to write a review.</p>
                            </div>

                            <div className="text-center">
                                <button id="write-btn" className="cust-rv bg-primary border-0 text-white px-5 py-2 mt-2"
                                    onClick={() => {
                                        setWrt(!wrt)

                                    }}
                                >Write a review <i className="bi bi-pencil-square"></i></button>
                                <button id="ask-btn" className="cust-rv bg-primary border-0 text-white px-5 py-2 mt-2"
                                    onClick={() => {
                                        setAsk(!ask)

                                    }}>Ask a question <i className="bi bi-chat-left-fill"></i></button>
                            </div>
                            <WriteaReview
                                write={setWrt}
                            />
                            <AskaQuestion />

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}


export default JwelleryDetails



class ProductDetails extends React.Component {
    render() {
        return (
            <>
                <div className="product-bg mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h6><b>Product Details</b></h6>
                            </div>
                        </div>

                        <div className="row">
                            <ProductDetailItem
                                title='Stone Information'

                            />

                            <ProductDetailItem
                                title='Stone Information'

                            />

                            <ProductDetailItem
                                title='Stone Information'

                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const ProductDetailItem = ({ title }) => {

    return (
        <>
            <div className="col-md-4 mt-4">
                <h6>{title}</h6>

                <div className="d-flex justify-content-between mt-3">
                    <p className="pro-text">Stone Weight ( g )</p>

                    <p className="pro-text">100</p>
                </div>

                <p className="pro-line"></p>

                <div className="mt-3">
                    <h6>Certification Details</h6>
                </div>

                <p className="pro-line"></p>

                <div className="d-flex justify-content-between mt-3">
                    <p className="pro-text">Gold Certification</p>

                    <p className="pro-text">BIS Hallmark 916</p>
                </div>

                <p className="pro-line"></p>

                <div className="d-flex justify-content-between mt-3">
                    <p className="pro-text">Hallmark Certificate No.</p>

                    <p className="pro-text">HM/C-7790174629</p>
                </div>

                <p className="pro-line"></p>

                <div className="d-flex justify-content-between mt-3">
                    <p className="pro-text">Platinum Color</p>

                    <p className="pro-text">NA</p>
                </div>

                <p className="pro-line"></p>
            </div>
        </>
    )
}

const AskaQuestion = () => {

    return (
        <>
            <div id="question" className="tabcontent">
                <p className="write-rv mt-4"></p>
                <div className="rv-bg">
                    <h5 className="text-center"><b>Ask a question</b></h5>
                    <form>
                        <label className="form-label mt-3 fm-rv">Question*</label>
                        <textarea col="30" rows="7" className="w-100 rv-form" placeholder="Write your question here"></textarea>

                        <div className="row">
                            <div className="col-md-6">
                                <label className="form-label mt-3 fm-rv">Your Name*</label>
                                <input type="text" className="w-100 rv-form" placeholder="Enter your name" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label mt-3 fm-rv">Your Email*</label>
                                <input type="email" className="w-100 rv-form" placeholder="Enter your email" />
                            </div>
                        </div>
                        <div className="text-end"><button className="px-5 py-2 view-btn mt-4">Post</button></div>
                    </form>
                </div>
            </div>
        </>
    )
}


const WriteaReview = ({ write }) => {

    return (
        <>
            <div id="write" className="tabcontent">
                <p className="write-rv mt-4"></p>
                <div className="rv-bg">
                    <h5 className="text-center"><b>Write a review</b></h5>
                    <form>
                        <label className="form-label fm-rv">Rating*</label>
                        <div>
                            <i className="bi bi-star text-warning"></i>
                            <i className="bi bi-star text-warning"></i>
                            <i className="bi bi-star text-warning"></i>
                            <i className="bi bi-star text-warning"></i>
                            <i className="bi bi-star text-warning"></i>
                        </div>
                        <label className="form-label mt-3 fm-rv">Title*</label>
                        <input type="text" className="w-100 rv-form" placeholder="Write a review title" />

                        <label className="form-label mt-3 fm-rv">Review*</label>
                        <textarea col="30" rows="7" className="w-100 rv-form" placeholder="Write your reviews here"></textarea>

                        <div className="row">
                            <div className="col-md-6">
                                <label className="form-label mt-3 fm-rv">Your Name*</label>
                                <input type="text" className="w-100 rv-form" placeholder="Enter your name" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label mt-3 fm-rv">Your Email*</label>
                                <input type="email" className="w-100 rv-form" placeholder="Enter your email" />
                            </div>
                        </div>
                        <div className="text-end"><button className="px-5 py-2 view-btn mt-4">Post</button></div>
                    </form>
                </div>
            </div>
        </>
    )
}