import React, { useState } from "react"
import { Button, styled, Box } from "@mui/material"

const Child = styled(Box)`
    margin-top: 30px;
    align-items:center;
    display:flex;
    font-size:14px;
    text-align:center;
    color:rgb(33,33,33);
`
const StyledButton = styled(Button)`
    border-radius: 50%;
    border:1px solid #c2c2c2;
    color:rgb(0,0,0);
    background-color:rgb(0,0,0,0);
    height:28px;
    min-width:28px;
    text-align:center;
    font-size:16px;

`


const GroupedButton = () => {
    const [ counter, setCounter ] = useState(1)

    const hnadleAddition = () => {
        setCounter(counter => counter + 1 )
    }
    const handleRemoval = () => {
        setCounter(counter => counter - 1 )
    }

    return (
        <Child>
            <StyledButton onClick={() => handleRemoval()} disabled={counter == 0}>-</StyledButton>
            <div
             style={{
                border:'1px solid #c2c2c2',
                alignItems:'center',
                Width:40,
                height:30,
                color:'black'
             }}
            >
                <Button disabled style={{minWidth:20,color:'black' }} >{counter}</Button>    
            </div>
            <StyledButton onClick={() => hnadleAddition()}>+</StyledButton>
        </Child>
    )
}

export default GroupedButton