// import React from 'react';
import HeaderCon from '../header/HeaderCon';
import Navbar from '../header/Navbar';
import FilterCard from '../ProductCard/FilterCard'
import ProductFilter from '../ProductCard/ProductFilter1'
import Footer from '../footer/Footer'
import './search.css';
import { useEffect } from 'react'

const Search = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <HeaderCon />
            <Navbar />
            <div className="filter-view">
                <ProductFilter />
                <FilterCard />
            </div>
            <Footer />
        </>
    )
}


export default Search;