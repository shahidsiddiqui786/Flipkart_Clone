import { Box, styled } from '@mui/material'
import { AdvertismentURL2 } from '../../constant/data';
import Slide2 from './Slide2'
const Component = styled(Box)`
    display: flex;
`
const LeftComponent = styled(Box)(({ theme}) => ({
    width: '83%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}))
const RightComponent = styled(Box)(({ theme}) => ({
    marginTop: 10,
    background: '#FFFFFF',
    width: '17%',
    marginLeft: 10,
    padding: 5,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))

const MidSlide = ({ products }) => {
    return (
        <Component>
            <LeftComponent>
                <Slide2 
                    data={products} 
                    title='Deals of the Day'
                    timer={true} 
                    multi={true} 
                />
            </LeftComponent>
            <RightComponent>
                <img src={AdvertismentURL2} style={{width: 217}}/>
            </RightComponent>
        </Component>
    )
}

export default MidSlide