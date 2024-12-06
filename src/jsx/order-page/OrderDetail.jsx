import React from "react";
import HeaderCon from "../header/HeaderCon";
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";
import "./orderpage.css";
import coins from "../../assets/images/coins.png";
import supercoins from "../../assets/images/supercoins.png";
import productimage from "../../assets/images/earring1.jpg";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import StarsIcon from "@mui/icons-material/Stars";
import HelpIcon from "@mui/icons-material/Help";
import WidgetsIcon from "@mui/icons-material/Widgets";
import companyicon from "../../assets/images/companyicon.png";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const OrderDetail = () => {
  return (
    <>
      <HeaderCon />
      <Navbar />
      <OrderDelivery />
      <DeliveryTimeline />
      <Footer />
    </>
  );
};
export default OrderDetail;

const OrderDelivery = () => {
  return (
    <>
      <div className="container">
        <p className="id-tag-fnt">
          Home / My Account / My Orders / 003219 78903
        </p>
        <div className="rate-rev-frm shadow">
          <div className="row">
            <div className="col-md-3">
              <CustomerAddress />
            </div>

            <div className="col-md-3">
              <h6 className="reward-heading">Your Rewards</h6>
              <Rewards
                coin={supercoins}
                heading="16 SuperCoins Cashback"
                description="Use it to save on your next order"
              />
              <Rewards
                coin={coins}
                heading="2 Saved Using SuperCoins"
                description="2 Coins Paid"
              />
            </div>
            <div className="col-md-3">
              <h6 className="reward-heading">More actions</h6>
              <p className="customer-add-fnt">Download Invoice</p>
            </div>
            <div className="col-md-3">
              <div className="text-center mt-4">
                <button className="invce-btn-1">Download</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const CustomerAddress = () => {
  return (
    <>
      <h6 className="reward-heading">Delivery Address</h6>
      <p className="coin-hd-fnt-1">User Name</p>
      <p className="customer-add-fnt">
        House No. , street Name, lane No. Jaipur
      </p>
      <h6 className="coin-hd-fnt-1">Phone Number</h6>
      <p className="customer-add-fnt">9876543210<br/>9876543210</p>
    </>
  );
};

const Rewards = (props) => {
  return (
    <>
      <div className="d-flex">
        <img src={props.coin} alt="coins" className="coins-sz-1" />
        <div className="ms-2">
          <h6 className="coin-hd-fnt-1">{props.heading}</h6>
          <p className="coin-para-fnt-1">{props.description}</p>
        </div>
      </div>
    </>
  );
};

const DeliveryTimeline = () => {
  return (
    <>
      <div className="container mt-3 mb-3">
        <div className="rate-rev-frm shadow">
          <div className="row">
            <div className="col-md-3">
              <div className="d-flex">
                <img
                  src={productimage}
                  alt="product"
                  className="pro-color-img"
                />
                <div className="ms-3">
                  <h6 className="coin-hd-fnt-1">Lorem, ipsum...</h6>
                  <p className="coin-para-fnt-1">color:Silver,Golden</p>
                  <p className="coin-para-fnt-1" style={{ marginTop: "-10px" }}>
                    Seller: DMJ
                  </p>
                  <h5 className="tl-rupee-fnt">
                    <CurrencyRupeeIcon className="tl-rupee-icon" />
                    1,000{" "}
                  </h5>
                  <p className="tl-delvry-offer">2 Offers Applied</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <TimelineView />
            </div>

            <div className="col-md-3 mt-5">
            <RateHelpBox />
            </div>
          </div>
          <div className="item-dlry-fnt-sz">
            <p>
              <WidgetsIcon /> Item was opened and verified at the time of
              delivery.
            </p>
          </div>
          <p className="tl-dl-line-1"></p>

          <div className="row">
            <div className="col-md-4">
              <div className="d-flex">
                <img
                  src={companyicon}
                  alt="product"
                  className="tl-cmpy-icon-img"
                />
                <div className="ms-3">
                  <h6 className="coin-hd-fnt-1">
                    Extended Warranty for Jewellery (1 year)
                  </h6>

                  <p className="coin-para-fnt-1">Seller: DMJ</p>
                  <h5 className="tl-rupee-fnt">
                    <CurrencyRupeeIcon className="tl-rupee-icon" />
                    47 + <i className="bi bi-coin text-warning"></i> 2{" "}
                  </h5>
                  <p className="tl-delvry-offer">1 Offers Applied</p>
                </div>
              </div>

              <h6 className="customer-add-fnt">Return policy ended on Aug 16</h6>
            </div>
            <div className="col-md-5">
              <p className="extend-fnt-sz-1">
                Your Extended Warranty Policy Number 1019654321 is valid from
                Aug 08, 2024 to Aug 07, 2025.
              </p>
            </div>

            <div className="col-md-3">
             <RateHelpBox />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TimelineView = () => {
  return (
    <>
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h6 className="dlry-tel-hd-fnt">Order Confirmed</h6>
            <p className="ord-dlry-tel-para">Mon, 7th Aug</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h6 className="dlry-tel-hd-fnt">Order Shiped</h6>
            <p className="ord-dlry-tel-para">Tue, 8th Aug</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h6 className="dlry-tel-hd-fnt">Out For Delivery</h6>
            <p className="ord-dlry-tel-para">Wed, 9th Aug</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h6 className="dlry-tel-hd-fnt">Order Delivered</h6>
            <p className="ord-dlry-tel-para">Wed, 9th Aug</p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};

const RateHelpBox = () =>{
    return(
        <>
         <h6 className="tl-rate-help-clr">
                <StarsIcon className="hprate-icon" /> Rate & Review Product
              </h6>
              <h6 className="tl-rate-help-clr">
                <HelpIcon className="hprate-icon" /> Need help?
              </h6>
        </>
    )
}