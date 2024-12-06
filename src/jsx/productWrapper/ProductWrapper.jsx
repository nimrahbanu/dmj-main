import React, { useState } from 'react';
import axios from 'axios';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocalMallIcon from '@mui/icons-material/LocalMall';

const proto = 'https://api.diwamjewels.com/DMJ'
const endPoint = '/api/v1/category';


const ProductWrapper = () => {

    const [cateData, setCateData] = useState([]);


    const fetchData = async () => {
        try {
            const res = await axios.get(proto + endPoint)
            console.log(res.data.data)
            setCateData(res.data.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>

            {
                cateData && cateData.map((category, index) => {
                    // console.log(category)
                    return (
                        <ItemCard
                            key={index}
                            category={category}
                        />
                    )
                })
            }

        </>
    )
}


export default ProductWrapper;




class ItemCard extends React.Component {


    render() {
        const { category } = this.props;

        return (
            <>

                {
                    category && <div className="jewel-bg mt-2">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12 text-center mt-4">
                                    <h3 className="heading-text"><b>{category[0].name}</b></h3>
                                    <h6 className="text-secondary text-h6" dangerouslySetInnerHTML={{ __html: category[0].seo_description }}></h6>
                                </div>
                            </div>

                            <div className="row">

                                <ItemImageCard img={proto + '/images/' + category[0].image} title={category[0].slug} />
                                <div className="col-md-6 mt-3 itemImg">

                                    <ItemImageRowCard
                                        subCategory={category[0].subCategory === null ? [] : category[0].subCategory}
                                    />


                                </div>
                            </div>

                            {
                                <CarouselForProduct
                                    productData={category[0].subCategory === null ? [] : category[0].subCategory}
                                    item='img'
                                />
                            }

                            <div className="showCardCarousel">
                                <CarouselForProduct
                                    item="Card"
                                    productData={category[0].subCategory === null ? [] : category[0].subCategory}
                                />
                            </div>


                            <div className="pb-5"></div>
                            {/* <div className="text-center">
                            <NavLink href="/carpet">
                                <button className="px-4 py-2 view-btn mt-3">View More</button>
                            </NavLink>
                        </div> */}
                        </div>
                    </div>
                }

            </>
        );
    }
}


class ItemImageCard extends React.Component {

    render() {
        const { img, title, productData } = this.props;
        // console.log(img)

        return (
            <>

                <div className="col-md-6 mt-3">
                    <NavLink to='/search'>
                        <div className="contain">
                            <img src={img} className="img-fluid rounded arrival-img" alt="design" />

                            <div className="text-block text-center">
                                <h6 className="mt-2 perfect-text-sz"><b>{title}</b></h6>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </>
        )
    }
}

class ItemImageRowCard extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         productData: '',

    //     };
    // }

    render() {
        const { subCategory } = this.props;

        return (
            <>
                <div className="row">
                    {

                        subCategory.length > 0 && subCategory.map((item, index) => {
                            if (index < 9) {
                                return (
                                    <SmallImageCard
                                        key={item.id}
                                        img={item.image}
                                        name={item.seo_title}

                                    />
                                )
                            }
                            else {
                                return null;
                            }


                        })

                    }
                </div>

            </>
        )
    }
}


class SmallImageCard extends React.Component {
    render() {
        const { img, name } = this.props;
        return (
            <>
                <div className="col-md-4 text-center">
                    <NavLink to='/search' className="text-decoration-none home-text">
                        <div className="product-card-box">
                            <img src={proto + '/images/' + img} className="img-fluid rounded new-img" alt="design" />
                            <p className="mt-3 perfect-text">{name}</p>
                            <p className="sale-offer">Up to 50%</p>
                        </div>
                    </NavLink>
                </div>
            </>
        )
    }
}









// carousel for product 





const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};


const CarouselForProduct = (props) => {

    const { productData } = props;
    // console.log(productData)


    const { item } = props;

    return (
        <div className="IndicatorCarousel">
            {/* <div className="IndicatorCarouselText">
            Select your preferred stock indicators
        </div> */}

            <br></br>

            {item === 'img' ?
                // If item is 'img', render a CarouselCard for each image
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}

                    customTransition="all .5s"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["desktop", "tablet", "mobil1e"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"

                >


                    {productData.length > 0 && productData.map((product) => {
                        return (<CarouselCard
                            key={product.id}
                            img={product.image}
                            title={product.seo_title}
                        />
                        )
                    })}
                </Carousel>
                :
                // <p>this is image</p>
                // If item is not 'img', render a ProductCard for each image
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
                    {productData.length > 0 && productData.map((item) => {
                        return (
                            <ProductCard
                                key={item.id}
                                img={proto + '/images/' + item.image}
                                name={item.seo_title}
                                cate={item.name}

                            />
                        )
                    })}



                </Carousel>
            }


        </div >
    );
};




class CarouselCard extends React.Component {
    render() {
        const { img, title } = this.props;
        return (
            <>
                <NavLink to="/search" className="text-decoration-none"><div className="product-card-box">
                    <div className='sliderCard'>
                        <div className="sliderCardImg">
                            <img src={proto + '/images/' + img} className="img-fluid sliderImg" alt="Image" />
                        </div>
                        <p className="mt-3 product-font text-center">{title}</p>
                        <p className="sale-offer text-center">Up to 50%</p>
                    </div>
                </div>
                </NavLink>
            </>
        )
    }
}

class ProductCard extends React.Component {

    render() {
        const { img, name, cate } = this.props;
        return (
            <>
                {/* <div>
                    <div className="text-decoration-none text-dark" style={{ cursor: 'pointer', userSelect: 'none' }}>
                        <div className="card slide-card">
                            <img src={img} className="card-img-top slider-card-img " alt="slider" />
                            <div className="card-body">
                                <p className="jewel-text mt-2"><b>{cate}</b></p>
                                <p className="jewel-text1">{name}</p>
                                <p className="jewel-text1">5000$</p>
                            </div>
                        </div>
                    </div>
                </div> */}

                <NavLink to="/search" className="text-decoration-none"><div className="product-card-box">
                    <div className='sliderCard'>
                        <div className="sliderCardImg">
                            <img src={img} className="img-fluid sliderImg" alt="Image" />
                        </div>
                        <p className="mt-3 product-font text-center">Jewellery</p>
                        <p className="sale-offer text-center">Up to 50%</p>
                    </div>
                </div>
                </NavLink>
            </>
        )
    }
}
