import React from "react"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './productFilter1.scss'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import axios from "axios";



const url = 'https://api.diwamjewels.com/DMJ/'
const endPoint = 'api/v1/category/maincategory';


function ProductFilter1() {

  const [category, setCategory] = useState([])

  async function fetchMainCategory() {
    try {
      const res = await axios.get(`${url}${endPoint}`);
      // console.log(res.data.data)
      setCategory(res.data.data)

    }
    catch (err) {
      console.log(err)
    }

  }


  useEffect(() => {
    window.scrollTo(0, 0);
    fetchMainCategory()

  }, [])



  return (
    <div className="accor-width">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="pro-hd-font">Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul data-accordion className="categories">


              {
                category.map(item => {
                  return (
                    <li className="subcat-font" key={item.id}>
                      <input type="checkbox" id="all" />
                      <label htmlFor="all">{item.type}</label>
                      {/* <span className="count">123K</span> */}
                    </li>
                  )
                })
              }


            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="pro-hd-font">Size</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul data-accordion className="categories">

              <ul className="cate-flt-list">
                <li className="subcat-font">
                  <input type="checkbox" id="all" />
                  <label htmlFor="all">2.2</label>
                  <span className="count">2.2</span>
                </li>
                {/* <li className="subcat-font"><input type="checkbox" id="low" /><label htmlFor="low">Low-Top Sneakers</label><span className="count">97K</span>
                </li>
                <li className="subcat-font"><input type="checkbox" id="high" /><label htmlFor="high">High-Top Sneakers</label><span className="count">93K</span>
                </li>
                <li className="subcat-font"><input type="checkbox" id="boots" /><label htmlFor="boots">Boots</label><span className="count">31K</span>
                </li>
                <li className="subcat-font"><input type="checkbox" id="casual" /><label htmlFor="casual">Casual Leather Shoes</label><span className="count">23K</span></li>
                <li className="subcat-font"><input type="checkbox" id="formal" /><label htmlFor="formal">Formal Shoes</label><span className="count">18K</span></li>
                <li className="subcat-font"><input type="checkbox" id="sand" /><label htmlFor="sand">Sandals</label><span className="count">2K</span></li>
                <li className="subcat-font"><input type="checkbox" id="slip" /><label htmlFor="slip">Slip Ons</label><span className="count">456</span>
                </li> */}

              </ul>

            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className="pro-hd-font">Color</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* <input className="dsearch" type="text" placeholder="Search Designers" name="search" /> */}

            <ul className="categories sh-list-flt">
              <li className="subcat-font"><input type="checkbox" id="sup" /><label htmlFor="sup">Red</label><span className="count">Red</span>
              </li>
              {/* <li className="subcat-font"><input type="checkbox" id="bape" /><label htmlFor="bape">Bape</label><span className="count">97K</span>
              </li>
              <li className="subcat-font"><input type="checkbox" id="gucci" /><label htmlFor="gucci">Gucci</label><span className="count">93K</span>
              </li>
              <li className="subcat-font"><input type="checkbox" id="bal" /><label htmlFor="bal">Balenciaga</label><span className="count">31K</span>
              </li>
              <li className="subcat-font"><input type="checkbox" id="prada" /><label htmlFor="prada">Prada</label><span className="count">23K</span></li> */}
              <li className="subcat-font"><input type="checkbox" id="formal" /><label htmlFor="formal">Green</label><span className="count">Green</span></li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>

  );
}

export default ProductFilter1;



