import { Card, Box, Typography, Button, styled } from '@mui/material'
import { Fassured } from '../../constant/data.js'
import { calcDiscountPrice , addEllipsis } from '../../service/calculator.js'
import GroupButton from './GroupButton'

const Child = styled(Card)`
    border-top: 1px solid #f0f0f0;
    border-radius: 0px;
    display: flex;
`
const LeftChild = styled(Box)`
    margin: 20px; 
    display: flex;
    flex-direction: column;
`
const RegularText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`
const StyledActualCost = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
`
const StyledPrice = styled(Typography)`
    color: #878787;
`
const StyledDiscountPercentage = styled(Typography)`
    color: #388E3C;
`
const StyledRemoveButton = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
`


const CartItem = ({ item, removeItemFromCart }) => {
    return (
        <Child>
            <LeftChild>
                <img src={item.images[0]} style={{ height: 110, width: 110 }} />
                <GroupButton />
            </LeftChild>
            <Box style={{ margin: 20 }}>
                <Typography> {addEllipsis(item.description)} </Typography>
                <RegularText>Seller:RetailNet
                    <span><img src={Fassured} style={{ width: 50, marginLeft: 10 }} /></span>
                </RegularText>
                <Typography style={{margin: '20px 0'}}>
                    <StyledActualCost component="span">₹{calcDiscountPrice(item.price, item.discountPercentage)}</StyledActualCost>&nbsp;&nbsp;&nbsp;
                    <StyledPrice component="span"><strike>₹{item.price}</strike></StyledPrice>&nbsp;&nbsp;&nbsp;
                    <StyledDiscountPercentage component="span">{item.discountPercentage}% off</StyledDiscountPercentage>
                </Typography>
                <StyledRemoveButton onClick={() => removeItemFromCart(item.id)}>Remove</StyledRemoveButton>
            </Box>
        </Child>
    )
}

export default CartItem