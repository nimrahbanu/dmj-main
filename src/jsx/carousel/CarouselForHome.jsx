// import cardimg1 from '../../assets/images/banner1.jpg';
// import cardimg2 from '../../assets/images/carpet.jpg';
// import cardimg3 from '../../assets/images/banner2.jpg';
// import cardimg4 from '../../assets/images/jewel_img/bangels.jpg';
import React, { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import '../../assets/css/App.css';
import '../../assets/css/carouselHome.css';
import { NavLink, useNavigate } from 'react-router-dom';
import cardUpdateImg from '../../assets/images/DMJImage.jpg';
import axios from 'axios';

const proto = 'https://api.diwamjewels.com/DMJ/'




const responsive = {
    superLargeDesktop: {
 
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 767.98, min: 0 },
        items: 2
    }
};


const CarouselForHome = (props) => {

    const { productData } = props;


    const { item } = props;

    return (
        <div className="IndicatorCarousel">
            <br></br>

            {item === 'img' ?
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}

                    customTransition="all .5s"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"

                >


                    {productData && productData.map((data, index) => {
                        return (<CarouselCard key={index} img={data.image} />
                        )
                    })}
                </Carousel>
                :
               
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    customTransition="all .5s"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"

                >
                    {productData && productData.map((item) => {
                        return (
                            <ProductCard
                                key={item.id}
                                img={proto + 'images/' + item.thum_image}
                                name={item.seo_title}
                                category={item.name}
                                id={item.id}
                                price={item.price}
                            />
                        )
                    })}
                   


                </Carousel>
            }


        </div >
    );
};
export default CarouselForHome;



class CarouselCard extends React.Component {
    render() {
        const { img } = this.props;
        return (
            <>
                <div className='sliderCard'>
                    <div className="sliderCardImg">
                        <img src={img} className="img-fluid sliderImg" alt="Image" />
                    </div>
                    <p className="mt-3 product-font text-center">Art & Craft</p>
                </div>
            </>
        )
    }
}

const ProductCard = ({ img, name, category, id, price }) => {

    const navigate = useNavigate()

    function RedirectDetailsPage(id) {
        navigate('/productDetails', { state: { id: id } })
        localStorage.setItem('productId', id)
    };

    return (
        <>
            <div>
                <div className="text-decoration-none text-dark" style={{ cursor: 'pointer', userSelect: 'none' }} onClick={() => RedirectDetailsPage(id)}>
                    <div className="card slide-card">
                        <img src={img} className="card-img-top slider-card-img " alt="slider" />
                        <div className="card-body">
                            <p className="jewel-text mt-2"><b>{category}</b></p>
                            <p className="jewel-text1">{name}</p>
                            <p className="jewel-text1">{price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { ProductCard }


