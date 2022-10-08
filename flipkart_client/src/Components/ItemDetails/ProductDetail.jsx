import { Box, Typography, Table, TableBody, TableRow, TableCell, styled } from '@mui/material'
import { LocalOffer as Offer } from '@mui/icons-material'
import { AdvertismentURL, DeliveryDate } from '../../constant/data.js'

const RegularText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`
const StyledTableRow = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
    }
`
const StyledOffer = styled(Offer)`
    margin-right: 10px;
    color: #00CC00;
    font-size: 15px;
`


const ProductDetail = ({ product }) => {
    return (
        <>
            <Typography>Available offers</Typography>
            <RegularText>
                <Typography><StyledOffer />Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                <Typography><StyledOffer />Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Typography>
                <Typography><StyledOffer />Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</Typography>
                <Typography><StyledOffer />Partner OfferExtra 10% off upto ₹500 on next furniture purchase</Typography>
            </RegularText>
            <Table>
                <TableBody>
                    <StyledTableRow>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by {DeliveryDate.toDateString()} | ₹40</TableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <span style={{ color: '#2874f0' }}>SuperComNet</span>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹329</Typography>
                        </TableCell>
                    </StyledTableRow>
                    <TableRow>
                        <TableCell colSpan={2}>
                            <img src={AdvertismentURL} style={{ width: 390 }} />
                        </TableCell>
                    </TableRow>
                    <StyledTableRow>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </StyledTableRow>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail