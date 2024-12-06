import { TrendingWrap, SellerWrap } from "./Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { memo, useEffect, useState } from "react";
import axios from "axios";
import { addSearch } from "../redux/dmjSlice";
import { useDispatch } from "react-redux";

const url = 'https://api.diwamjewels.com/DMJ/'
const endPoint = 'api/v1/category/maincategoryName/';

const NavbarDropdown = (props) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { title } = props;

    const [subCate, setSubCate] = useState([]);

    async function fetchSubCate() {
        // console.log(subCate)
        try {
            const res = await axios.get(`${url}${endPoint}${title}`)
            console.log(res.data.data)
            if(res.data.data){
                // console.log('fired')
                setSubCate(res.data.data)
            }
           
          
        }
        catch (res) {
            setSubCate([])
            console.log(res)
          
        }
    }

    async function handleNavigate(val) {
        // console.log(val)
        await dispatch(addSearch(val));
        navigate('/search')
    }

    useEffect(() => {
        fetchSubCate()
    }, [])

    return (
        <>

            <ul className="dropdown-menu1">
                <div className="row">
                    <div className="col-md-3">
                        <h6 className="menu-heading-ft mb-3"><b>SHOP BY TYPE</b></h6>

                        {
                            subCate.length > 0 && subCate.map((nav) => {
                                return (
                                    <li className="sp-list-type"
                                        key={nav.id}
                                        onClick={() => {
                                            handleNavigate(nav.name)
                                        }} style={{ cursor: "pointer" }}>{nav.name}</li>
                                )
                            })
                        }
                        {/* <li className=""> <NavLink to="/search" className="sp-list-type">NECKLACE</NavLink></li> */}

                    </div>

                    <div className="col-md-3">
                        <h6 className="menu-heading-ft mb-3"><b>TRENDING NOW</b></h6>
                        <li className="">
                            <TrendingWrap />
                        </li>
                        <li className="">
                            <TrendingWrap />
                        </li>
                        <li className="">
                            <TrendingWrap />
                        </li>

                    </div>

                    <div className="col-md-3">
                        <h6 className="menu-heading-ft mb-3"><b>NEW ARRIVAL</b></h6>
                        <li className="">
                            <TrendingWrap />
                        </li>
                        <li className="">
                            <TrendingWrap />
                        </li>

                    </div>

                    <div className="col-md-3">
                        <h6 className="menu-heading-ft mb-3"><b>BEST SELLERS</b></h6>
                        <li className="">
                            <SellerWrap />
                        </li>
                    </div>
                </div>
            </ul>
        </>

    );

}


export default memo(NavbarDropdown)