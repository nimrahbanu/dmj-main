import React from 'react';
import Footer from '../footer/Footer';
import HeaderCon from '../header/HeaderCon';
import Navbar from '../header/Navbar';
import ItemImg from '../../assets/images/craft/craft.png'
import { NavLink } from 'react-router-dom';
import SortIcon from '@mui/icons-material/SwapVert';
import FilterIcon from '@mui/icons-material/Tune';
import Popular from '@mui/icons-material/LocalFireDepartment';
import Star from '@mui/icons-material/StarBorder';
import DiscountIcon from '@mui/icons-material/Discount';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import Grid from '@mui/material/Unstable_Grid2';
import { TweenMax } from "gsap";
import { MDBRange } from 'mdb-react-ui-kit';
import axios from 'axios';



const options = ['Choose a Color', 'Blue', 'Red', 'Pink', 'Golden'];


export default class Carpet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectOption1: 'Choose a Color',
            selectOption2: 'Choose a Metal',
            selectOption3: 'Choose a Price',
            openSortList: false,
            openFilterList: false,
            backgroundAttach: 'inherit'
        }
    }

    render() {
        const { selectOption1, selectOption2, selectOption3, openSortList, openFilterList } = this.state;
        return (
            <>
                <HeaderCon />
                <Navbar />


                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 mt-3">
                            <p>Home / Carpet</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <form className="filter-bg TopFilter">
                                <div className="row ">
                                    <div className="col-md-3 mt-1">
                                        <select className="form-control" value={selectOption1} onChange={(e) => this.setState({ selectOption1: e.target.value })}>
                                            {options.map((data) => {
                                                return (
                                                    <option className="" key={data} value={data}  >
                                                        {data}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>

                                    <div className="col-md-3 mt-1">
                                        <select className="form-control" value={selectOption2} onChange={(e) => this.setState({ selectOption2: e.target.value })}>
                                            {options.map((data) => {
                                                return (
                                                    <option className="" key={data} value={data}  >
                                                        {data}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>

                                    <div className="col-md-3 mt-1">
                                        <select className="form-control" value={selectOption3} onChange={(e) => this.setState({ selectOption3: e.target.value })}>
                                            {options.map((data) => {
                                                return (
                                                    <option className="" key={data} value={data}  >
                                                        {data}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>

                                    <div className="col-md-3 mt-1">
                                        <button className="px-5 py-2 view-btn w-100"><b>Filter</b></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="row">
                        {/* <ItemCard />
                        <ItemCard />
                        <ItemCard /> */}
                        <ItemCard />

                    </div>
                </div>


                <Footer />


                <div className="filterBox">
                    <div className="sort" onClick={() => {
                        if (!this.state.openSortList) {
                            document.body.style.position = 'fixed';
                        }
                        else { document.body.style.position = ''; }
                        this.setState({
                            openSortList: !openSortList,
                            openFilterList: false
                        })
                    }}>
                        <SortIcon />
                        <p>Sort</p>

                    </div>
                    <div className="filter" onClick={() => {
                        if (!this.state.openFilterList) {
                            document.body.style.position = 'fixed';
                        }
                        else { document.body.style.position = ''; }
                        this.setState({
                            openSortList: false,
                            openFilterList: !openFilterList
                        })
                    }}>
                        <FilterIcon />
                        <p>Filter</p>
                    </div>
                </div>

                {openSortList && <SortBy />}
                {openFilterList && <Filter />}
            </>
        )
    }
}


class ItemCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jewelleryData: [],
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        axios
            .get('http://localhost:8080/api/v1/category/5')
            .then(response => {
                // console.log(response.data.subCategory);
                const jewelleryData = response.data.subCategory;
                this.setState({ jewelleryData });
            })
            .catch(error => {
                console.error(error);
            });
    }
    render() {
        const { jewelleryData } = this.state;
        console.log(jewelleryData)
        return (
            <>
                <div className="col col-md-3 mt-2 column">
                    <figure className="snip1268">
                        <div className="image">
                            <NavLink className="text-decoration-none">
                                <div className="row jewelleryData">
                                  
                                    
                                    {
                                    jewelleryData &&
                                    jewelleryData.map((data, index) => {

                                        return (



                                            <img src={data.image} key={index} alt="sq-sample4" className="img-fluid jewel-img" />
                                            
                                            )
                                    })
                                }
                              
                                
                                  
                               
                                </div>
                            </NavLink>
                            <div className="icons">
                                <NavLink to='/addToCart' className="text-center hover-icon"> <i className="bi bi-cart-plus-fill fs-5"></i></NavLink>
                                <NavLink href="/wishlist" className="text-center hover-icon ms-1"> <i className="bi bi-heart fs-5"></i></NavLink>
                            </div>
                        </div>
                        <NavLink className="text-decoration-none">
                            <figcaption>
                                <p className="jewel-text mt-2"><b>Cartier Necklace</b></p>
                                <p className="jewel-text1">Luxury Jewellery</p>
                                <p className="jewel-text1">Rs. 5,000</p>
                            </figcaption>
                        </NavLink>
                    </figure>
                </div>
            </>
        )
    }
}


class SortBy extends React.Component {

    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        const containerRef = this.containerRef.current;
        TweenMax.fromTo(containerRef, 0.5, { x: -1050, opacity: 0 }, { x: 0, opacity: 1 });
    }

    render() {

        return (
            <div className='sortBox' ref={this.containerRef} >

                <h4>Sort By</h4>
                <div className="sortLine mb-3"></div>
                <SortList
                    txt='Price : Low to High'
                    icon={<PriceChangeIcon />}
                />
                <SortList
                    txt='Latest'
                    icon={<Star />}
                />
                <SortList
                    txt='Discount'
                    icon={<DiscountIcon />}
                />
                <SortList
                    txt='Popular'
                    icon={<Popular />}
                />

                <SortList
                    txt='Price : High to Low'
                    icon={<PriceChangeIcon />}
                />
            </div>
        )
    }
}

class SortList extends React.Component {
    render() {
        const { txt, icon } = this.props;
        return (
            <div className='sortList'>
                {icon}
                <p onClick={() => console.log('fired  ')}>{txt}</p>
            </div>
        )
    }
}

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayColor: '',
            rangeValue: 0,
        }

        this.containerRef = React.createRef();
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleRangeValue = this.handleRangeValue.bind(this);

    }

    componentDidMount() {
        const containerRef = this.containerRef.current;
        TweenMax.fromTo(containerRef, 0.5, { x: 1050, opacity: 0 }, { x: 0, opacity: 1 });
    }

    // handling the display of through 
    handleCheckboxChange = (value) => {
        this.setState({ displayColor: value });
    };


    handleRangeValue(evt) {
        this.setState({ rangeValue: evt.target.value })
    }


    render() {
        const { displayColor, rangeValue } = this.state;
        return (
            <div className='filterPopup' ref={this.containerRef} >
                <h4>Filter</h4>
                <div className="sortLine mb-3"></div>
                <Grid container spacing={2}>

                    <Grid xs={4}>
                        <Options handleCheckboxChange={this.handleCheckboxChange} value="Color" />
                        <Options handleCheckboxChange={this.handleCheckboxChange} value="Price" />
                    </Grid>
                    <div className="vtLine"></div>
                    <Grid xs={8} className='pl-2'>
                        {(displayColor === 'Price') ? <Price value={rangeValue} handleRangeValue={this.handleRangeValue} /> : <FilterColor value={rangeValue} />}
                    </Grid>
                    {console.log(rangeValue)}
                </Grid>


            </div>
        )
    }
}

class FilterColor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedColor: null,
        };
    }

    handleColorChange = (color) => {
        this.setState({ selectedColor: color });
        // Call a function to filter products by color
        // You could pass the selected color to the function as a prop or parameter
    }

    render() {

        return (
            <>

                <div className="filterColorBox">
                    <div
                        className={`colorOption ${this.state.selectedColor === "red" ? "selected" : ""}`}
                        onClick={() => this.handleColorChange("red")}
                    >
                        Red
                        <div style={{ backgroundColor: "red" }}></div>
                    </div>
                    <div
                        className={`colorOption ${this.state.selectedColor === "blue" ? "selected" : ""}`}
                        onClick={() => this.handleColorChange("blue")}
                    >
                        Blue
                        <div style={{ backgroundColor: "blue" }}></div>
                    </div>
                    <div
                        className={`colorOption ${this.state.selectedColor === "green" ? "selected" : ""}`}
                        onClick={() => this.handleColorChange("green")}
                    >
                        Green
                        <div style={{ backgroundColor: "green" }}></div>
                    </div>
                    {/* Add more color options here */}
                </div>
            </>
        )
    }
}

class Options extends React.Component {
    handleCheckboxChange = (event) => {
        const { value } = this.props;
        if (event.target.checked) {
            this.props.handleCheckboxChange(value);
        } else {
            this.props.handleCheckboxChange('');
        }
    };

    render() {
        return (
            <>
                <div className="filterOption">
                    <input type="radio" onChange={this.handleCheckboxChange} name='filter' />
                    <h4>{this.props.value}</h4>
                </div>

            </>
        );
    }
}

class Price extends React.Component {
    render() {
        const { handleRangeValue } = this.props;
        return (
            <>
                <MDBRange
                    defaultValue={0}
                    min='0'
                    max='5000000'
                    step='1000'
                    id='customRange3'
                    label=''
                    onChange={handleRangeValue}
                />
            </>
        )
    }
}












