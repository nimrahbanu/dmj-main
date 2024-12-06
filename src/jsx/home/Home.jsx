import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';

import Footer from '../footer/Footer';
import HeaderCon from '../header/HeaderCon';
import Navbar from '../header/Navbar';
import Carousel from 'react-bootstrap/Carousel';

import CarouselForHome from '../carousel/CarouselForHome';
// import { NavLink } from 'react-router-dom';
import ProductWrapper from '../productWrapper/ProductWrapper';
import Loader from '../loader/Loader';
import TrendingProducts from '../carousel/TrendingProducts'

const proto = 'https://api.diwamjewels.com/DMJ/'
const endPoint = 'api/v1/banner';
const searchEndPoint = 'api/v1/products';


const Home = () => {


    const [bannerData, setBanner] = useState([])
    const [isLoad, setIsLoad] = useState(true)
    const [productInfo, setProductInfo] = useState([])

    const fetData = async () => {

        try {
            const res = await axios.get(`${proto}${searchEndPoint}`);
            const bannerRes = await axios.get(`${proto}${endPoint}`);
            // console.log(res.data.data)
            setProductInfo(res.data.data)
            setBanner(bannerRes.data.data)
            setIsLoad(false)
        }
        catch (error) {
            console.log(error)
            setIsLoad(true)
        }
    }

    useEffect(() => {
        fetData()
    }, [productInfo])




    return (
        <>


            {isLoad ? <Loader /> :
                <>

                    <HeaderCon />
                    <Navbar />
                    <MainCarousel
                        bannerData={bannerData}
                    />
                    {/* <CarouselForHome
                        productData={productInfo}
                    /> */}
                    <TrendingProducts />
                    <ProductWrapper />
                    <Footer />
                </>
            }
        </>
    );

}

export default Home







const MainCarousel = ({ bannerData }) => {



    // useEffect(() => {

    //     axios.get(`${proto}${endPoint}`)
    //         .then((res) => {
    //             // console.log(res.data.data)
    //             setBanner(res.data.data)
    //             setIsLoad(false)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })


    // }, [])

    return (
        <>
            <Carousel
                style={{ left: '0px' }}
                nextIcon={<i className="bi bi-arrow-right-circle-fill text-dark fs-1"></i>}
                prevIcon={<i className="bi bi-arrow-left-circle-fill text-dark fs-1"></i>}

            >
                {bannerData.map((banner) => {
                    return (
                        <Carousel.Item key={banner.id}>
                            <img
                                className="banner-size"
                                src={`${proto}images/${banner.image}`}
                                alt="slide"
                            // style={{ height: '70vh' }}
                            />

                        </Carousel.Item>
                    )
                })
                }


            </Carousel>
        </>
    )

}









