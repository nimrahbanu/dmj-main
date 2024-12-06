
import { useState, memo } from 'react';
import './newNav.css';
import logo from '../../assets/images/dmjicon.png';
import searchIcon from './icons/search.png';
import { NavLink, useNavigate } from 'react-router-dom';
import earring from '../../assets/images/earring1.jpg';
import NavbarDropdown from './NavbarDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { addSearch } from '../redux/dmjSlice';
import { useEffect } from 'react';
import ThreeLine from '@mui/icons-material/DehazeOutlined';
import CrossIcon from '@mui/icons-material/CloseOutlined';



// const url = 'http://137.184.3.191:8080/DMJ/';
// const endPoint = 'api/v1/category/maincategory';

const userId = localStorage.getItem('userId')

function Navbar() {

    const [isJwelOpen, setIsJwelOpen] = useState(false);
    const [isArtOpen, setIsArtOpen] = useState(false);
    const [isCarpet, setIsCarpet] = useState(false);
    const [isMobNav, setIsMobNav] = useState(true)

    const [search, setSearch] = useState('');

    const [profile, setProfile] = useState(false)

    const dispatch = useDispatch()
    const searchTxt = useSelector(state => state.product.search.payload)


    const navigate = useNavigate()

    useEffect(() => {
        // console.log(searchTxt)
        setSearch(searchTxt)
    }, [searchTxt])

    async function handleSearch(e) {
        e.preventDefault();
        setSearch(e.target.value)
        dispatch(addSearch(e.target.value))
        // navigate('/search')
    }

    async function handleProSearch() {
        navigate('/search')
    }


    async function handleProfile() {
        setProfile(true)
    }

    async function handleSignOut() {
        localStorage.removeItem('userId')
    }



    return (
        <>

            <div className="nav-outer-dropdown nav-drop-shadow shadow">

                <div className="navOuter shadow-sm">
                    <NavLink to="/">
                        <div className="nav-logo">
                            <img src={logo} alt="logo" />
                        </div>
                    </NavLink>
                    <ul>
                        <div className="nav-product">

                            <li className="dropdown1 mt-2" onClick={() => {
                                setIsJwelOpen(!isJwelOpen)
                                setIsArtOpen(false)
                                setIsCarpet(false)
                            }} >
                                <NavLink className="nav-box-product" style={isJwelOpen ? { color: '#d0b646' } : null}>
                                    Jewellery {!isJwelOpen
                                        ? <i className="bi bi-chevron-down caret-icon-sz ms-2 mt-1"></i>
                                        : <i className="bi bi-chevron-up caret-icon-sz ms-2 mt-1"></i>
                                    }
                                </NavLink>

                            </li>

                            <li className="dropdown1 mt-2" onClick={() => {
                                setIsArtOpen(!isArtOpen)
                                setIsJwelOpen(false)
                                setIsCarpet(false)
                            }}>
                                <NavLink className="nav-box-product" style={isArtOpen ? { color: '#d0b646' } : null}>
                                    Art & Craft {!isArtOpen
                                        ? <i className="bi bi-chevron-down caret-icon-sz ms-2 mt-1"></i>
                                        : <i className="bi bi-chevron-up caret-icon-sz ms-2 mt-1"></i>
                                    }
                                </NavLink>


                            </li>
                            <li className="mt-2 dropdown1" onClick={() => {
                                setIsCarpet(!isCarpet)
                                setIsJwelOpen(false)
                                setIsArtOpen(false)
                            }}>
                                <NavLink className="nav-box-product" style={isCarpet ? { color: '#d0b646' } : null}>
                                    Carpet {!isCarpet
                                        ? <i className="bi bi-chevron-down caret-icon-sz ms-2 mt-1"></i>
                                        : <i className="bi bi-chevron-up caret-icon-sz ms-2 mt-1"></i>
                                    }
                                </NavLink>


                            </li>
                        </div>
                    </ul>
                    <div className="nav-box-search">
                        <input type="text" className='nav-search' value={search} onChange={handleSearch} />
                        <img src={searchIcon} className='nav-search-icon' onClick={handleProSearch} />
                    </div>
                    <div className="nav-account">
                        <div className="nav-box" onClick={() => { setProfile(!profile) }}>
                            <i className="bi bi-person-circle nav-icon-item ms-5"></i>
                        </div>
                        {profile && <div className="more-profile">
                            {!userId ? <li onClick={async () => { navigate('/defaultlogin') }}>Login / Sign Up</li>
                                : <>
                                    <li>Profile</li>
                                    <li className='mt-2' onClick={() => { 
                                        handleSignOut() 
                                        window.location.reload()
                                        }}>Sign Out</li>
                                </>
                            }

                        </div>}
                        <div className="nav-box">
                            <NavLink to="/wishlist"> <i className="bi bi-suit-heart-fill nav-icon-item ms-4"></i></NavLink>
                        </div>
                        <div className="nav-box">
                            <NavLink to="/addToCart"> <i className="bi bi-cart4 nav-icon-item ms-4"></i></NavLink>
                        </div>
                    </div>

                </div>

                <div className="navbar-mobile">
                    <div className='nav-mob-icon'>
                        <img src={logo} alt="logo" className="nav-logo" />
                        {
                            isMobNav ? <ThreeLine onClick={() => {
                                setIsMobNav(false)
                            }} />
                                : <CrossIcon
                                    onClick={() => {
                                        setIsMobNav(true)
                                        setIsJwelOpen(false)
                                        setIsArtOpen(false)
                                        setIsCarpet(false)
                                    }}
                                />}
                    </div>
                    {
                        !isMobNav ? <div className="nav-mobile-item">
                            <ul>
                                <div className="nav-product">

                                    <li className="dropdown1 mt-2" onClick={() => {
                                        setIsJwelOpen(!isJwelOpen)
                                        setIsArtOpen(false)
                                        setIsCarpet(false)
                                    }} >
                                        <NavLink className="nav-box-product" style={isJwelOpen ? { color: '#d0b646' } : null}>
                                            Jewellery {!isJwelOpen
                                                ? <i className="bi bi-chevron-down caret-icon-sz ms-2 mt-1"></i>
                                                : <i className="bi bi-chevron-up caret-icon-sz ms-2 mt-1"></i>
                                            }
                                        </NavLink>

                                    </li>

                                    <li className="dropdown1 mt-2" onClick={() => {
                                        setIsArtOpen(!isArtOpen)
                                        setIsJwelOpen(false)
                                        setIsCarpet(false)
                                    }}>
                                        <NavLink className="nav-box-product" style={isArtOpen ? { color: '#d0b646' } : null}>
                                            Art & Craft {!isArtOpen
                                                ? <i className="bi bi-chevron-down caret-icon-sz ms-2 mt-1"></i>
                                                : <i className="bi bi-chevron-up caret-icon-sz ms-2 mt-1"></i>
                                            }
                                        </NavLink>


                                    </li>
                                    <li className="mt-2 dropdown1" onClick={() => {
                                        setIsCarpet(!isCarpet)
                                        setIsJwelOpen(false)
                                        setIsArtOpen(false)
                                    }}>
                                        <NavLink className="nav-box-product" style={isCarpet ? { color: '#d0b646' } : null}>
                                            Carpet {!isCarpet
                                                ? <i className="bi bi-chevron-down caret-icon-sz ms-2 mt-1"></i>
                                                : <i className="bi bi-chevron-up caret-icon-sz ms-2 mt-1"></i>
                                            }
                                        </NavLink>


                                    </li>
                                </div>
                            </ul>
                            <div className="nav-box-search">
                                <input type="text" className='nav-search' value={search} onChange={handleSearch} />
                                <img src={searchIcon} className='nav-search-icon' onClick={handleProSearch} />
                            </div>
                            <div className="nav-account">
                                <div className="nav-box" onClick={() => { setProfile(!profile) }}>
                                    <i className="bi bi-person-circle nav-icon-item ms-5"></i>
                                </div>
                                {profile && <div className="more-profile">
                                    {userId ? <li onClick={async () => { navigate('/login') }}>Login / Sign Up</li>
                                        : <>
                                            <li>Profile</li>
                                            <li className='mt-2'>Sign Out</li>
                                        </>
                                    }

                                </div>}
                                <div className="nav-box">
                                    <i className="bi bi-suit-heart-fill nav-icon-item ms-4"></i>
                                </div>
                                <div className="nav-box">
                                    <i className="bi bi-cart4 nav-icon-item ms-4"></i>
                                </div>
                            </div>
                        </div>
                            : null
                    }
                </div>

                {isJwelOpen ? <NavbarDropdown title='jewellery' /> : null}
                {isArtOpen ? <NavbarDropdown title='art' /> : null}
                {isCarpet ? <NavbarDropdown title='carpet' /> : null}


            </div>


        </>
    )
}

export default Navbar;


function TrendingItem() {
    return (
        <>
            {/* <NavLink to="/" className="sp-list-type"> */}
            <div className="d-flex">
                <NavLink to="/search" className="text-decoration-none">
                    <div><img src={earring} alt="product" className="dropdown-pro-img" />
                        <p className="sp-list-type mt-1">Earring</p>
                    </div>
                </NavLink>
                <NavLink to="/search" className="text-decoration-none">
                    <div className="ms-3"><img src={earring} alt="product" className="dropdown-pro-img" />
                        <p className="sp-list-type mt-1">Earring</p>
                    </div>
                </NavLink>
            </div>
            {/* </NavLink> */}
        </>

    );
}

function ArrivalItem() {
    return (
        <>
            <div className="d-flex">
                <NavLink to="/search" className="text-decoration-none">  <div>
                    <img src={earring} alt="product" className="ar-pro-img" />
                    <p className="sp-list-type mt-2 text-center">Earring</p>
                </div>
                </NavLink>
                <NavLink to="/search" className="text-decoration-none">
                    <div className="ms-3">
                        <img src={earring} alt="product" className="ar-pro-img" />
                        <p className="sp-list-type mt-2 text-center">Earring</p>
                    </div>
                </NavLink>
            </div>
        </>

    );
}

function SellerItem() {
    return (
        <>
            <div>
                <img src={earring} alt="product" className="sel-item-img" />
                <p className="sp-list-type mt-2">UPTO 50% OFF</p>

                <NavLink to="/search" className="sp-list-type">
                    View all designs <i className="bi bi-arrow-right"></i>
                </NavLink>
            </div>
        </>

    );
}

export const TrendingWrap = memo(TrendingItem)

export const ArrivalWrap = memo(ArrivalItem)

export const SellerWrap = memo(SellerItem)