import React from "react";
import Banner from "../Banner/Banner";
import HeaderCon from "../header/HeaderCon";
import Navbar from "../header/Navbar";
import productImg from '../../assets/images/brace.jpg';
import Footer from '../footer/Footer';
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { LocalConvenienceStoreOutlined } from "@mui/icons-material";


const url = 'https://api.diwamjewels.com/DMJ/'
const endPoint = 'api/v1/products/';
const productEndPoint = 'api/v1/products';

var cart = JSON.parse(localStorage.getItem('pdIds')) || [];



const AddToCart = () => {

    const [proDetails, setProDetails] = useState([])

    const [adtCart, setAdtCart] = useState([])

    const [isUpdate, setIsUpdate] = useState(false)

    // async function addProductData() {



    async function fethcProductData(id) {
        // console.log(id)
        try {
            const res = await axios.get(url + productEndPoint + '/' + id)
            console.log(res.data.data)
            setProDetails((items) => [...items, res.data.data])

            // console.log(proDetails)
        }
        catch (err) {
            console.log(err)
        }
    }


    async function updateCart(value) {
        // console.log('fired')
        // console.log(value)
        // await setAdtCart(cart)
        if (cart.length > 0) {
            var updatingCard = cart.filter(item => value != item)
            console.log(updatingCard)
            localStorage.setItem('pdIds', JSON.stringify(updatingCard));
            setIsUpdate(!isUpdate)
        }

    }




    useEffect(() => {
        cart = JSON.parse(localStorage.getItem('pdIds')) || [];
        window.scrollTo(0, 0);
        setProDetails([])
        setAdtCart(cart)
        cart.map((id) => fethcProductData(id))
        // addProductData()
        // console.log(cart)
    }, [isUpdate])



    return (
        <>
            <HeaderCon />
            <Navbar />


            <div className="container-fluid">
                <NavLink to="/search" className="text-decoration-none">
                    <h6 className="mt-4 cont-shp"><i className="bi bi-chevron-left"></i>
                        Continue shopping</h6></NavLink>
                <div className="row">
                    <div className="col-md-8">
                        <div className="cart-bg d-flex justify-content-between" style={{ overflowX: 'hidden' }}>
                            <h6 className="pro-font">PRODUCT</h6>
                            <div className="d-flex">
                                <h6 className="pro-font">QUANTITY</h6>
                                <h6 className="pro-font ms-5">PRICE</h6>
                                <h6 className="pro-font ms-5">REMOVE</h6>
                            </div>
                        </div>

                        {
                            proDetails.length > 0 ? proDetails.map((item, index) => {
                                // console.log(item)
                                return (
                                    <ProductDetails
                                        product={item}
                                        removeCart={updateCart}
                                        key={index}
                                    />
                                )
                            })
                                :
                                <h4 className="mt-4 text-center">Please Add Some Products</h4>
                        }


                    </div>
                    <div className="col-md-4">
                        <OrderDetails />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}


class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: 0,
        }

        
    }



    render() {

        const { product, removeCart } = this.props
        return (
            <>


                <Products
                    product={product}
                    removeItem={removeCart}
                />


            </>
        )
    }
}

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemQuan: 1,
            productName: 'Sample',
            price: 3,
            totalPrice: 3,
            thumb_img: productImg,
            itemId: 0
        }

        this.addQuan = this.addQuan.bind(this);
        this.minQuan = this.minQuan.bind(this);
    }

    componentDidMount() {
        const { product } = this.props;
        // console.log(product)
        this.setState({
            itemQuan: 2,
            productName: product.seo_title,
            price: 3,
            totalPrice: 3,
            thumb_img: url + 'images/' + product.thum_image,
            itemId: product.id
        })
    }

    minQuan() {

        let itemQuan = this.state.itemQuan;
        let totalPrice = this.state.totalPrice;
        let price = this.state.price;
        if (itemQuan > 2) {
            this.setState({
                itemQuan: itemQuan - 1,
                totalPrice: totalPrice - price
            })
        }

    }

    addQuan() {
        let itemQuan = this.state.itemQuan;
        let price = this.state.price;
        if (itemQuan < 6) {
            this.setState({
                itemQuan: itemQuan + 1,
                totalPrice: price * itemQuan,
            });
        }

    }


    // removeItem() {
    //     console.log('fired')
    // }

    setValue() {
        console.log('working')
    }
    render() {
        const { itemQuan, productName, totalPrice, thumb_img, itemId } = this.state;
        const { removeItem } = this.props
        return (

            <>

                <div className="cart-display mt-3">
                    <div className="d-flex">
                        <img src={thumb_img} alt="Cart" className="img-fluid cart-img" />
                        <div>
                            <p className="ms-2 cart-font">
                                {productName.length < 25 ? productName : productName.slice(0, 25) + '...'
                                }
                            </p>
                            <p className="ms-2 cart-font">Availablity : <span className="text-primary">In Stock</span></p>

                        </div>
                    </div>

                    <div className="d-flex">
                        <div className="num-block skin-1 mt-2">
                            <div className="num-in">
                                <span className="minus dis" onClick={this.minQuan}></span>
                                <input type="text" className="in-num" value={itemQuan - 1} readOnly="" onChange={this.setValue} />
                                <span className="plus" onClick={this.addQuan}></span>
                            </div>
                        </div>
                        <h6 className="pro-font mt-3 cart-qty"><i className="bi bi-currency-rupee"></i>{totalPrice}</h6>
                        <h6 className="pro-font mt-3 cart-qty" onClick={() => removeItem(itemId)}><i className="bi bi-trash-fill fs-5 text-danger"></i></h6>
                    </div>
                </div>

                <hr />
            </>
        )
    }
}


class OrderDetails extends React.Component {
    render() {
        return (
            <>

                <div className="stk-box-item">
                    <div className="order-dtl">
                        <h6 className="pro-font">Order Details</h6>
                        <hr />
                        <div className="d-flex justify-content-between mt-3">
                            <p className="sub-ttl">Subtotal</p>
                            <p className="sub-ttl"><i className="bi bi-currency-rupee"></i>37,300</p>
                        </div>

                        <div className="d-flex justify-content-between mt-3">
                            <p className="sub-ttl">Discount</p>
                            <p className="sub-ttl"><i className="bi bi-currency-rupee"></i>5,000</p>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <p className="sub-ttl">Delivery Charges</p>
                            <p className="sub-ttl"><i className="bi bi-currency-rupee"></i>0</p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between mt-3">
                            <p><b>Total Amount</b></p>
                            <p>
                                <b><i className="bi bi-currency-rupee"></i>32,000</b>
                            </p>
                        </div>
                        <hr />
                        <p className="save-dtl">You will save <i className="bi bi-currency-rupee"></i>5,000 on this order.</p>
                    </div>

                    <div className="text-end mt-3">
                        <NavLink to="/checkout"><button className="trend-cart-btn">Place Order</button></NavLink>
                    </div>
                </div>
            </>
        )
    }
}




export default AddToCart;