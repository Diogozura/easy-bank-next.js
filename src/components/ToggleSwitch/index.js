import React from 'react';
import styled from 'styled-components';
export default function ToggleSwitch ({onClick, isChecked, children, ...props}) {
    return (
        <ToggleSwitchWrapper>
            
            <input type="checkbox" {...props} defaultChecked={isChecked} onClick={onClick}/>
            <span/> 
           
        </ToggleSwitchWrapper>
    )
}

const ToggleSwitchWrapper = styled.label`
    background: #eee;
    width: 4rem;
    height: 2rem;
    border-radius: 1rem;
    display: flex;
    align-items:center;
    justify-content : center;
    position: relative;

    input{
        height: 100%;
        width: 100%;
        opacity: 0;
    }
    span{
        position: absolute;
        width:2rem;
        height: 2rem;
        border-radius: 2rem;
        background: blue;
        left: 0;
        cursor: pointer;
        box-shadow: 2px 2px 4px grey;
        transition: 0.25s;
    }
    input:checked +span {
        left: 50%;
        background: red;
    }
` 