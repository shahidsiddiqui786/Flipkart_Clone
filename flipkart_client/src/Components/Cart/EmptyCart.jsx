import { useNavigate } from 'react-router-dom'
import { Typography, Box, styled, Button } from '@mui/material'
import { ImageEmptyCartURL } from '../../constant/data'

const Child = styled(Box)`
    width: 80%%;
    height: 65vh;
    background: #fff;
    margin: 80px 140px;
`
const Wrapper = styled(Box)`
    text-align: center;
    padding-top: 70px;
`
const StyledImage = styled('img')({
    width: '15%'
})


const EmptyCart = () => {

    const navigate = useNavigate()
    
    const MoveToHomePage = () => {
        navigate('/')
    }

    return (
        <Child>
            <Wrapper>
                <StyledImage src={ImageEmptyCartURL} />
                <Typography style={{
                    color:'black',
                    paddingTop: 20,
                    fontWeight:400,
                    fontSize:18,
                }}
                >
                     Your cart is empty! </Typography>
                <Typography  style={{
                    fontSize:12,
                    paddingTop:12,
                    paddingBottom:24,
                }}>
                    Add items to it now.</Typography>
                <Button
                 onClick={() => MoveToHomePage()} 
                 variant='contained'
                 style={{
                    paddingLeft:72,
                    paddingRight:72,
                    paddingTop:12,
                    paddingBottom:12,
                    fontSize:14,
                    fontFamily:'Roboto,Arial,sans-serif',
                    textTransform:'none',
                    backgroundColor:'#2874f0',
                 }}
                >
                    Shop now</Button>
            </Wrapper>
        </Child>
    )
}

export default EmptyCart