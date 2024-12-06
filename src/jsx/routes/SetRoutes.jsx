import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../about/About';
import Alljsx from '../alljsx/Alljsx';
import Blog from '../blog/Blog';
import Contact from '../contact/Contact';
// import SignUp from '../login/SignUp';
import BlogDetails from '../blog/BlogDetails';
import Carpet from '../carpet/Carpet';
import Faq from '../faq/Faq';
import TrackOrder from '../track-order/TrackOrder';
import Home from '../home/Home';
// import Login from '../login/Login';
import WishList from '../wishlist/WishList';
import AddToCart from '../addtocart/AddToCart';
import BookNow from '../booking-page/BookNow';
import Billing from '../paymentMode/Billing';
import '../../assets/css/update.css';
import UpdateLogin from '../login/UpdateLogin';
import CarouselBlog from '../carousel/CarouselBlog';
import Animate from '../animation/Animate';
import Otp from '../otp-page/Otp';
import Login2 from '../login/Login2';
import GetIp from '../getip/GetIp';
import Loginpage from '../login/LoginPage';
import Loader from '../loader/Loader';
import Rough from '../rough/Rough';
import Navbar from '../header/Navbar';
import CheckoutPage from '../checkout/CheckoutPage';
import FilterCard from '../ProductCard/FilterCard';
import Search from '../search/Search';
// import DetailsPage from '../jewellery-page/DetailsPage'
import ProductDetails from '../jewellery-page/ProductDetail';
import Privacy from '../privacypolicy/Privacy'
import Terms from '../terms/Terms'
import Refund from '../refundpolicy/Refund'
import TrendingProducts from '../carousel/TrendingProducts'
import PaymentGateway from '../payment-gateway/PaymentGateway'
import ReviewPage from '../reviewpage/ReviewPage';
export default class SetRoutes extends React.Component {
    render() {
        return (
            <>
                <Routes>


                    <Route path='/about' element={<About />} />
                    <Route path='/contactUs' element={<Contact />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/blog/blogDetails' element={<BlogDetails />} />
                    <Route path='/carpet' element={<Carpet />} />
                    <Route path='/faq' element={<Faq />} />
                    <Route path='/trackOrder' element={<TrackOrder />} />
                    <Route path='/' element={<Home />} />

                    <Route path='/wishlist' element={<WishList />} />
                    <Route path='/addToCart' element={<AddToCart />} />
                    <Route path='/booknow' element={<BookNow />} />
                    <Route path='/billing' element={<Billing />} />
                    <Route path='/carousel' element={<CarouselBlog />} />
                    <Route path='/signUp' element={<UpdateLogin />} />
                    <Route path='/animate' element={<Animate />} />
                    {/* <Route path='/otp' element={<Otp />} /> */}
                    <Route path='/defaultlogin' element={<Login2 />} />

                    <Route path='/login' element={<Loginpage />} />


                    <Route path='/loader' element={<Loader />} />
                    <Route path='/rough' element={<Rough />} />
                    <Route path='/navbar' element={<Navbar />} />
                    <Route path='/checkout' element={<CheckoutPage />} />
                    <Route path='/card' element={<FilterCard />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/productDetails/:slug/:skuid' element={<ProductDetails />} />
                    <Route path='/privacypolicy' element={<Privacy />} />
                    <Route path='/termscondition' element={<Terms />} />
                    <Route path='/refundpolicy' element={<Refund />} />
                    <Route path='/trendingproducts' element={<TrendingProducts />} />

                    <Route path='/paymentgateway' element={<PaymentGateway />} />

                    <Route path='/rating' element={<ReviewPage/>} />
                </Routes>

            </>
        )
    }
}