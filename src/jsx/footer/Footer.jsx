import React from "react";
import logo from "../../assets/images/dmj.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { addSearch } from "../redux/dmjSlice";
import { useDispatch } from "react-redux";


const useFullLink = [
  {
    title: 'Jewellery',
    link: false
  },
  {
    title: 'Handi crafts',
    link: false
  },
  {
    title: 'Heritage',
    link: false
  },
  {
    title: 'Apparels',
    link: false
  },
  {
    title: 'Blue Pottery',
    link: false
  }
]

const info = [
  {
    title: 'Payment Option',
    link: false
  },
  {
    title: 'Refund & Returns',
    link: '/refundpolicy'
  },
  {
    title: 'Terms & Conditions',
    link: '/termscondition'
  },
  {
    title: ' Privacy Policy',
    link: '/privacypolicy'
  },
  {
    title: 'Contact Us',
    link: '/contactUs'
  }
]

const section = [
  {
    title: 'About DMJ',
    link: '/about'
  },
  {
    title: 'Blog',
    link: '/blog'
  },
  {
    title: 'FAQ',
    link: '/faq'
  },
  {
    title: ' Track Your Order',
    link: '/trackOrder'
  },
  {
    title: 'Help',
    link: '/faq'
  }
]



export default class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="whatsapp-icon">
          <NavLink to="/" title="">
            <i className="bi bi-whatsapp wp-icon-color"></i>
          </NavLink>
        </div>

        <div className="footer-bg mt-1">
          <div className="container">
            <footer className="">
              <div className="row">
                <div className="col-md-3 mt-3">
                  <img
                    src={logo}
                    alt="Logo"
                    className="img-fluid footer-logo"
                  />

                  <p className="footer-para mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem ea molestias nemo nam
                  </p>
                </div>
                <FooterItem
                  head=" Useful Links"
                  items={useFullLink}
                  navi={false}

                />
                <FooterItem
                  head=" Information"
                  items={info}
                  navi={true}
                />
                <FooterItem
                  head=" Section"
                  items={section}
                  navi={true}
                />
              </div>

              <div className="d-flex justify-content-between py-4 my-4 border-top footerText">
                <p className="footer-para">
                  &copy; 2021 Company, Inc. All rights reserved.
                </p>

                <ul className="list-unstyled d-flex">
                  <li className="ms-3">
                    <NavLink
                      className="link-dark"
                      to="https://www.facebook.com/diwamjewels"
                    >
                      <i className="bi bi-facebook fs-5 footer-icbx"></i>
                    </NavLink>
                  </li>
                  <li className="ms-3">
                    <NavLink
                      className="link-dark"
                      to="https://www.youtube.com/@diwamjewelsvlog"
                    >
                      <i className="bi bi-youtube fs-5 footer-icbx"></i>
                    </NavLink>
                  </li>
                  <li className="ms-3">
                    <NavLink
                      className="link-dark"
                      to="https://www.instagram.com/diwamjewels/"
                    >
                      <i className="bi bi-instagram fs-5 footer-icbx"></i>
                    </NavLink>
                  </li>
                  <li className="ms-3">
                    <NavLink
                      className="link-dark"
                      to="https://twitter.com/DiwamJewels"
                    >
                      <i className="bi bi-twitter fs-5 footer-icbx"></i>
                    </NavLink>
                  </li>
                  <li className="ms-3">
                    <NavLink
                      className="link-dark"
                      to="https://www.pinterest.ca/diwamjewels/"
                    >
                      <i className="bi bi-pinterest fs-5 footer-icbx"></i>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </footer>
          </div>
        </div>
      </>
    );
  }
}



const FooterItem = ({ head, items, navi }) => {


  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleNavigate(val) {
    await dispatch(addSearch(val));
    navigate('/search')
  }


  return (
    <>
      <div className="col-md-3 mt-3">
        <h5 className="text-white">
          <b>{head}</b>
        </h5>

        <p className="headline"></p>

        <ul className="nav flex-column mt-4">
          {
            items.map((itemVal, index) => {
              return (

                <li className="nav-item mb-2" key={index}>
                  {
                    navi ?
                      <NavLink className="nav-link p-0 footer-text" to={itemVal.link}>
                        {itemVal.title}
                      </NavLink>
                      :
                      <li className="nav-link p-0 footer-text" onClick={() => {
                        handleNavigate(itemVal.title)
                      }} style={{ cursor: "pointer" }}>{itemVal.title}</li>
                  }

                </li>

              )
            })
          }

        </ul>
      </div>
    </>
  );
}


