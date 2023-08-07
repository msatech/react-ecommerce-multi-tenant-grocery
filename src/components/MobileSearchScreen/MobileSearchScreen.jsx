import React,{ useState } from 'react'
import './MobileSearchScreen.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useGetAllProductsQuery } from '../../Store/features/products/productsApi';

// For advanced Filtering using fuse library
import Fuse from 'fuse.js'
import SearchComponent from '../SearchComponent/SearchComponent';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

function MobileSearchScreen() {

    const [searchproducts, setSearchproducts] = useState([])

    const cart = useSelector((state) => state.cart);
    const { data: products = [], isFetching, error } = useGetAllProductsQuery();
    // Fuse Setting 

    const options = {
        includeScore: true,
        // Search in `author` and in `tags` array
        keys: ['category', 'title']
    }


    const fuse = new Fuse(products, options)


    const FindSearchResult = (value) => {
        const result = fuse.search(value)
        setSearchproducts(result)
    }

    // Handle Search result

    const handleSearchResult = (e) => {
        FindSearchResult(e.target.value)
    }

    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }


    return (
        <div className='mobilesearchscreen'>
            <div className='mobilesearchscreen__topheader'>
                <div className='inputfiled__container'>
                    <ArrowBackIcon onClick={goBack} className='backicon' />
                    <input type="text" placeholder='search products' onChange={handleSearchResult} />
                </div>
            </div>
            <div className='mobilesearchscreen__productdisplay'>
                {
                    searchproducts.length === 0 ? (
                        null
                    )

                        : (
                            <div className='search__field__result'>
                                {
                                    searchproducts?.map(searchItem => (
                                        
                                        <SearchComponent searchItem={searchItem} key={searchItem.id} />

                                    ))
                                }
                            </div>


                        )
                }
            </div>
        </div>
    )
}

export default MobileSearchScreen
