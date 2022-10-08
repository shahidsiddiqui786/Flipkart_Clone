import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { InputBase, List, ListItem, Box, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { getProducts as listProducts } from '../../redux/actions/productActions'
import { Link } from 'react-router-dom'

const SearchContainer = styled(Box)`
  border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  background-color: #fff;
  display: flex;
`
const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`
const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`
const InputSearchBase = styled(InputBase)`
  font-size: 14px;
  font-weight:500;
  color: #000 !important;
  width: 100%;
  padding-left: 20px;
`

const Search = () => {
    const [ text, setText ] = useState()
    const [ open, setOpen ] = useState(true)

    const getText = (text) => {
        setText(text)
        setOpen(false)
    }

    const getProducts = useSelector(state => state.getProducts)
    const { products } = getProducts
    const dispatch = useDispatch()

    const openLink = () => {
      setOpen(true)
    }

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <SearchContainer>
            <InputSearchBase
              placeholder="Search for products, brands and more"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => {
                e.preventDefault();
                getText(e.target.value)
              }}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            {
              text && 
              <ListWrapper hidden={open}>
                {
                  products.filter(product => product.title.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                      <Link 
                        to={`/product/${product.id}`} 
                        style={{ textDecoration:'none', color:'inherit'}}
                        onClick={() => openLink()}  
                      >
                        {product.title}
                      </Link>
                    </ListItem>
                  ))
                }  
              </ListWrapper>
            }
        </SearchContainer>
    )
}

export default Search