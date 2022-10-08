import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { styled, Box, Typography, Grid } from '@mui/material'
import { Star as Star} from '@mui/icons-material'

import ProductDetail from './ProductDetail'
import ActionItem from './ActionItem'
import { getProductDetails } from '../../redux/actions/productActions'
import { Fassured } from '../../constant/data.js'
import { calcDiscountPrice , calcRating} from '../../service/calculator.js'



const Wrapper = styled(Box)`
    margin-top: 55px;
    background: #F2F2F2;
`
const Child = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}))
const RightChild = styled(Grid)`
    margin-top: 50px;
    & > p {
        margin-top: 10px;
    }
`
const Styledstar = styled(Star)`
    font-size: 12px;
    align: center;
`



const DetailView = () => {
    
    const { id } = useParams()
    const dispatch = useDispatch()
    const { loading, product } = useSelector(state => state.getProductDetails)
    useEffect(() => {
        if(product && id != product.id)   
            dispatch(getProductDetails(id))
    }, [dispatch, product, id, loading])
    
    return (
        <Wrapper>
            <Box></Box>
            { product && Object.keys(product).length &&
                <Child container> 
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </Grid>
                    <RightChild item lg={8} md={8} sm={8} xs={12}>
                        <Typography>{product.description}</Typography>
                        <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
                            <span style={{
                                color: 'white', 
                                backgroundColor: '#388e3c',
                                paddingTop: 2, 
                                paddingBottom: 2,
                                paddingLeft: 6,
                                paddingRight: 4,
                                fontSize: 12, 
                                fontWeight: 700,
                                borderRadius: 3
                            }}>
                                {calcRating(product.rating)}&nbsp;
                                <Styledstar/>
                            </span>
                        
                            &nbsp;&nbsp;8 Ratings & 1 Reviews
                            <span><img src={Fassured} style={{width: 77, marginLeft: 20}} /></span>
                        </Typography>
                        <Typography>
                            <span style={{ fontSize: 28 }}>₹{calcDiscountPrice(product.price ,product.discountPercentage)}</span>&nbsp;&nbsp;&nbsp; 
                            <span style={{ color: '#878787' }}><strike>₹{product.price}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>{product.discountPercentage}% off</span>
                        </Typography>
                        <ProductDetail product={product} />
                    </RightChild>
                </Child>
            }   
        </Wrapper>
    )
}

export default DetailView