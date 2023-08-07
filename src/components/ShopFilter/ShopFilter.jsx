import React, {useState } from 'react';

import './ShopFilter.css'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

function ShopFilter() {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='shopfilter'>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="filter__accordion">
                <AccordionSummary
                    expandIcon={<AddIcon className="accordion__expand__icon" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    
                >
                    <Typography className="productfilter__category">Vegetables</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" /> Regular Veggies</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" />  Onion, Potato</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" />  Exotic Veggies</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" />  Cut Vegetables</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" />  Root Vegetables</p>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="filter__accordion">
                <AccordionSummary
                    expandIcon={<AddIcon className="accordion__expand__icon" />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className="productfilter__category" >Fruits</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" />  Regular Veggies</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" /> Onion, Potato</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" /> Exotic Veggies</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" /> Cut Vegetables</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" /> Root Vegetables</p>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="filter__accordion">
                <AccordionSummary
                    expandIcon={<AddIcon className="accordion__expand__icon" />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className="productfilter__category">Dry Fruits</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" /> Penuts</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" /> Onion, Potato</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" /> Exotic Veggies</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" /> Cut Vegetables</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" /> Root Vegetables</p>
                </AccordionDetails>
            </Accordion>



            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="filter__accordion">
                <AccordionSummary
                    expandIcon={<AddIcon className="accordion__expand__icon" />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                    
                >
                    <Typography className="productfilter__category">Vegetables</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" /> Regular Veggies</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" />  Onion, Potato</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" />  Exotic Veggies</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" />  Cut Vegetables</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" />  Root Vegetables</p>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className="filter__accordion">
                <AccordionSummary
                    expandIcon={<AddIcon className="accordion__expand__icon" />}
                    aria-controls="panel5a-content"
                    id="panel5a-header"
                >
                    <Typography className="productfilter__category" >Fruits</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" />  Regular Veggies</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" /> Onion, Potato</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" /> Exotic Veggies</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" /> Cut Vegetables</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" /> Root Vegetables</p>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className="filter__accordion">
                <AccordionSummary
                    expandIcon={<AddIcon className="accordion__expand__icon" />}
                    aria-controls="panel6a-content"
                    id="panel6a-header"
                >
                    <Typography className="productfilter__category">Dry Fruits</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" /> Penuts</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" /> Onion, Potato</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" /> Exotic Veggies</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" /> Cut Vegetables</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" /> Root Vegetables</p>
                </AccordionDetails>
            </Accordion>

            

        </div>
    )
}

export default ShopFilter
