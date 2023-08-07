import React from 'react'
import './CategoryGrid.css'
import { Link } from 'react-router-dom'

const CategoryGrid = ({zoneproducts}) => {
   
    return (
        <div className="zonesection">
            <div className="zonesection__header">
				<div><h2> </h2></div>
				{/* <div><button className="btn">View All</button></div> */}
			</div>
            <div className="zonesection__items">
                <Link to="/shop"><div className="zonesection__item"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/685766/1617038438712.jpg?imwidth=414&impolicy=hq" alt="fakeimage-1" /></div></Link>
                <Link to="/shop"><div className="zonesection__item"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/685747/1617038229617.jpg?imwidth=414&impolicy=hq" alt="fakeimage-2" /></div></Link>
                <Link to="/shop"><div className="zonesection__item"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/685757/1617038388494.jpg?imwidth=414&impolicy=hq" alt="fakeimage-3" /></div></Link>
                <Link to="/shop"><div className="zonesection__item"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/545913/1620556544564.jpg?imwidth=414&impolicy=hq" alt="fakeimage-4" /></div></Link>
                <Link to="/shop"><div className="zonesection__item"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/545914/1596200073469.jpg?imwidth=414&impolicy=hq" alt="fakeimage-3" /></div></Link>
                <Link to="/shop"><div className="zonesection__item"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/545917/1596200076062.jpg?imwidth=414&impolicy=hq" alt="fakeimage-4" /></div></Link>
                
            </div>
            
        </div>
    )
}

export default CategoryGrid
