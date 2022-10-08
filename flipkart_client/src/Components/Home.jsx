import React,  { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts as listProducts } from '../redux/actions/productActions'
import { Box, styled } from '@mui/material'
import NavBar from './Home/NarBar'
import Banner from './Home/Banner'
import MidSlide from './Home/MidSlide'
import MidSection from './Home/MidSection'
import Slide2 from './Home/Slide2'


const Component = styled(Box)`
    padding: 20px 10px;
    background: #F2F2F2;
`


const Home = () => {
    const getProducts = useSelector(state => state.getProducts)
    const { products, error } = getProducts
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products={products} />
                <MidSection />
                <Slide2
                    data={products} 
                    title='Discounts for You'
                    timer={false} 
                    multi={true} 
                />
                <Slide2
                    data={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide2
                    data={products} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <Slide2
                    data={products} 
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                />
            </Component>
        </>
    )
}

export default Home