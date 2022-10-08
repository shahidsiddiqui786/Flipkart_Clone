import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { Box, Typography, Button, Grid, styled } from '@mui/material'

import { addToCart, removeFromCart } from '../../redux/actions/cartActions'
import TotalView from './TotalView'
import EmptyCart from './EmptyCart'
import CartItem from './CartItem'
import AlertDialogSlide from './Model'


const Child = styled(Grid)(({ theme }) => ({
    padding: '30px 135px',
    backgroundColor:'#f1f3f6',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        padding: '15px 0'
    }
}))
const LeftChild = styled(Grid)(({ theme }) => ({
    paddingRight: 15,
    [theme.breakpoints.down('sm')]: {
        marginBottom: 15
    }
}))
const StyledCartHeading = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    margin-bottom: 10px;
`
const StyledBottomChild = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
`
const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    border-radius: 2px;
    width: 250px;
    height: 51px;
`


const Cart = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cartDetails = useSelector(state => state.cart)
    const { cartItems } = cartDetails
    const { id } = useParams()

    useEffect(() => {
        if(cartItems && id !== cartItems.id)   
            dispatch(addToCart(id))
    }, [dispatch, cartItems, id])

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id))
    }
    const buyNow = () => {
        console.log("Buyed!")
        setTimeout(()=>{
            cartItems.map(item =>{
                removeItemFromCart(item.id)
            })
            navigate('/')
        }, 2000)
    }

    return (
        <>
        { cartItems.length ? 
            <Child container>
                <LeftChild item lg={8} md={8} sm={12} xs={12}>
                    <StyledCartHeading>
                        <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems?.length})</Typography>
                    </StyledCartHeading>
                        {   cartItems.map(item => (
                                <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
                            ))
                        }
                    <StyledBottomChild>
                        <StyledButton onClick={() => buyNow()} variant="contained">
                           <AlertDialogSlide/>
                        </StyledButton>
                    </StyledBottomChild>
                </LeftChild>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <TotalView cartItems={cartItems} />
                </Grid>
                
            </Child> : <EmptyCart />
        }
        </>
    )
}

export default Cart